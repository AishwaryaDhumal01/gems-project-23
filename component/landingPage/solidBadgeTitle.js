import { BiSolidBadgeCheck } from "react-icons/bi";

const SOLIDBADGE_TITLES = [
  "Learn with experts",
  "Get certificate",
  "Get membership",
];

function SolidBadgeTitle() {
  return (
    <ul className="list-inline position-relative justify-content-center justify-content-lg-start mb-4">
      {SOLIDBADGE_TITLES.map((title, index) => (
        <li className="list-inline-item me-2" key={index}>
          <BiSolidBadgeCheck className="h5 me-1" />
          {title}
        </li>
      ))}
    </ul>
  );
}

export default SolidBadgeTitle;
