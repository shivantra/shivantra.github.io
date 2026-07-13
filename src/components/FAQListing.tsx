export function FAQItem({
  id,
  question,
  answer,
  open,
}: {
  id: string;
  question: string;
  answer: string;
  open: boolean;
}) {
  return (
    <div className="accordion-item">
      <h2 className="accordion-header">
        <button
          className={`accordion-button${open ? "" : " collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#panelsStayOpen-collapse${id}`}
          aria-expanded={open ? "true" : "false"}
          aria-controls={`panelsStayOpen-collapse${id}`}
        >
          {question}
        </button>
      </h2>
      <div
        className={`accordion-collapse collapse${open ? " show" : ""}`}
        id={`panelsStayOpen-collapse${id}`}
      >
        <div className="accordion-body">{answer}</div>
      </div>
    </div>
  );
}
