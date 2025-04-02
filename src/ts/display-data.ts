import { ICourseInfo } from "@ts/ICourseInfo";
import { deleteCourse } from "./deleteCourse";
import { main } from "./main";

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

  data.forEach(({ id, courseCode, courseName, progression, syllabus }) => {
    const tr: HTMLTableRowElement = document.createElement("tr");
    // Create an array excluding syllabus (we handle it separately).
    [courseCode, courseName, progression, id.toString()].forEach(
      (text: string, index: number) => {
        const td: HTMLTableCellElement = document.createElement("td");
        if (index === 0) {
          const a: HTMLAnchorElement = document.createElement("a");
          a.innerText = text;
          a.href = syllabus;
          a.target = "_blank";
          td.appendChild(a);
        } else if (index === 3) {
          const deleteButton = document.createElement("button");
          deleteButton.addEventListener("click", async () => {
            try {
              const response = await deleteCourse(id);
              main(); // Refreshes the table with the updated course data.
              alert(response.message);
            } catch (error) {
              console.log(error);
            }
          });
          deleteButton.innerText = "X";
          td.appendChild(deleteButton);
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
