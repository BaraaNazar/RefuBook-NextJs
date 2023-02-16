// import React, { useState, ReactNode } from "react";

// interface ReadMoreReadLessProps {
//   children: string;
//   button: boolean;
// }

// function ReadMoreReadLess({ children }: ReadMoreReadLessProps): JSX.Element {
//   const [isReadMoreShown, setIsReadMoreShown] = useState(false);
//   const toggle = (): void => {
//     setIsReadMoreShown((prevState) => !prevState);
//   };
//   return (
//     <div>
//       {isReadMoreShown ? children : children.substr(0, 300)}
//       <button
//         className="text-blue-500 underline"
//         type="button"
//         onClick={toggle}
//       >
//         {isReadMoreShown ? "Read Less" : "...Read More"}
//       </button>
//     </div>
//   );
// }

// export default ReadMoreReadLess;
