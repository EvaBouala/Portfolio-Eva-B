"use client";

import { useEffect, useRef, useState } from "react";

type ReactPdfModule = {
  Document: React.ComponentType<any>;
  Page: React.ComponentType<any>;
  pdfjs: {
    version: string;
    GlobalWorkerOptions: { workerSrc: string };
  };
};

type PdfSliderProps = {
  pdfUrl: string;
};

export function PdfSlider({ pdfUrl }: PdfSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [reactPdf, setReactPdf] = useState<ReactPdfModule | null>(null);
  const [pdfLoadError, setPdfLoadError] = useState(false);
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [pageWidth, setPageWidth] = useState(820);

  useEffect(() => {
    let isMounted = true;

    import("react-pdf")
      .then((module) => {
        module.pdfjs.GlobalWorkerOptions.workerSrc =
          "https://unpkg.com/pdfjs-dist@" +
          module.pdfjs.version +
          "/build/pdf.worker.min.mjs";

        if (isMounted) {
          setReactPdf({
            Document: module.Document,
            Page: module.Page,
            pdfjs: module.pdfjs,
          });
        }
      })
      .catch(() => {
        if (isMounted) {
          setPdfLoadError(true);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (!containerRef.current) {
        return;
      }

      const containerWidth = containerRef.current.clientWidth;
      setPageWidth(Math.max(360, Math.floor(containerWidth - 2)));
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return (
    <div className="w-full max-w-full" ref={containerRef}>
      <div className="w-full min-h-72 md:min-h-96 flex items-center justify-center p-0 bg-sand/30">
        {!reactPdf && !pdfLoadError ? (
          <p className="text-sm text-muted-foreground">Chargement du PDF...</p>
        ) : pdfLoadError || !reactPdf ? (
          <p className="text-sm text-destructive">
            Impossible de charger la présentation PDF.
          </p>
        ) : (
          <reactPdf.Document
            file={pdfUrl}
            onLoadSuccess={({ numPages: totalPages }: { numPages: number }) => {
              setNumPages(totalPages);
              setPageNumber(1);
            }}
            loading={
              <p className="text-sm text-muted-foreground">
                Chargement du PDF...
              </p>
            }
            error={
              <p className="text-sm text-destructive">
                Impossible de charger la présentation PDF.
              </p>
            }
          >
            <reactPdf.Page
              pageNumber={pageNumber}
              width={pageWidth}
              renderTextLayer={false}
              renderAnnotationLayer={false}
            />
          </reactPdf.Document>
        )}
      </div>

      <div className="px-4 py-3 border-t border-gold/20 bg-sand/50 flex items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => setPageNumber((prev) => Math.max(1, prev - 1))}
          disabled={pageNumber <= 1}
          className="px-3 py-1.5 text-xs tracking-widest uppercase border border-navy/30 text-navy hover:bg-navy hover:text-cream transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Page précédente
        </button>

        <p className="text-xs text-muted-foreground tracking-wide">
          Page {pageNumber} / {numPages || "..."}
        </p>

        <button
          type="button"
          onClick={() =>
            setPageNumber((prev) =>
              numPages ? Math.min(numPages, prev + 1) : prev,
            )
          }
          disabled={!numPages || pageNumber >= numPages}
          className="px-3 py-1.5 text-xs tracking-widest uppercase border border-navy/30 text-navy hover:bg-navy hover:text-cream transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Page suivante
        </button>
      </div>

    </div>
  );
}
