import React from "react";
import PropTypes from "prop-types";

const Problem = props => {
  const { title, description, notes, rules, examples } = props.content;
  return (
    <div>
      <h3 className="text-4xl mb-2 font-display text-indigo-900 font-extrabold">
        {title}
      </h3>
      <p>{description}</p>
      <br />
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </p>

      <h4 className="text-base mt-8 font-medium mb-2 text-gray-600">
        Examples:
      </h4>

      <table>
        <tbody>
          {examples.map(ex => {
            return (
              <tr className="mb-2">
                <td className="py-1">
                  <span className="bg-gray-200 rounded p-1 px-2 text-gray-800 leading-none">
                    {ex[0]}
                  </span>
                </td>
                <td className="mr-1 text-gray-500">
                  <i className="icon-arrow-right"></i>
                </td>
                <td className="mr-1 text-gray-800 font-medium px-6">{ex[1]}</td>
                <td className="text-gray-500">{ex[2]}</td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h4 className="text-base mt-8 font-medium mb-2 text-gray-600">Rules:</h4>
      <ul>
        {rules.map(rule => {
          return (
            <li>
              <i className="icon-check-circle"></i> {rule}
            </li>
          );
        })}
      </ul>
      <hr className="my-5 border-t-1 border-gray-400" />
      <div className="text-sm text-gray-600 flex items-center ">
        <i className="icon-file-text mr-2 text-xl text-orange-600"></i>
        <div>{notes}</div>
      </div>
    </div>
  );
};

Problem.propTypes = {
  content: PropTypes.string.isRequired
};
export default Problem;
