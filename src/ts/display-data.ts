import { ICourseInfo } from "@ts/ICourseInfo";

// This function cannot be generic because it relies on properties specific to the ICourseInfo interface.
export function displayDataList(data: Array<ICourseInfo>): void {
  // Remove the previous tbody elem if it exists.
  let prevTbody: HTMLTableSectionElement | null =
    document.querySelector("tbody");
  if (prevTbody) prevTbody.remove();

  let table: HTMLTableElement = document.querySelector("table")!;
  let tbody: HTMLTableSectionElement = document.createElement("tbody");

  // Create a document fragment to batch DOM updates.
  const fragment: DocumentFragment = document.createDocumentFragment();

  data.forEach(({ CourseCode, CourseName, Progression, Syllabus }) => {
    const tr: HTMLTableRowElement = document.createElement("tr");
    // Create an array excluding syllabus (we handle it separately).
    [CourseCode, CourseName, Progression].forEach(
      (text: string, index: number) => {
        const td: HTMLTableCellElement = document.createElement("td");
        if (index === 0) {
          const a: HTMLAnchorElement = document.createElement("a");
          a.innerText = text;
          a.href = Syllabus;
          a.target = "_blank";
          td.appendChild(a);
        } else {
          td.innerText = text;
        }
        tr.appendChild(td);
      }
    );
    fragment.appendChild(tr);
  });
  tbody.appendChild(fragment);
  table.appendChild(tbody);
}
