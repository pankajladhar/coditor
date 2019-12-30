import React from "react";

const Instructions = ({ data }) => {
  return (
    <div className="p-12">
      <h3 className="text-3xl font-headline uppercase">{data.title}</h3>
      <p className="text-gray-600">{data.description}</p>
      <div className="my-4 text-lg">Examples</div>
      <ul>
        {data.examples &&
          data.examples.map((example, index) => {
            const { functionExample, expectedOutput, comment } = example;
            return (
              <li className="flex mb-1" key={`Instructions-${index}`}>
                <span className="bg-gray-300 py-1 px-2 rounded mr-3 text-gray-700">
                  {functionExample}
                </span>
                <span className="mr-3 text-gray-500"> => </span>
                <span className="mr-3 font-bold">{expectedOutput}</span>
                <span className="text-gray-500 italic">{comment}</span>
              </li>
            );
          })}
      </ul>
      {data.notes && (
        <>
          <div className="my-4 text-lg">Notes</div>
          <p className="text-gray-600">{data.notes}</p>
        </>
      )}
    </div>
  );
};

export default Instructions;
