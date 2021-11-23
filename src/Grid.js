import React from "react";

const Grid = ({ config, data }) => (
  <table>
    <thead>
      <tr>
        {config.map((item) => (
          <th>{item.title}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {data.map((dataItem) => (
        <tr>
          {config.map((configItem) => {
            console.log("here", configItem);
            return configItem.hasOwnProperty("component") ? (
              configItem.component.name === "PokemonName" ? (
                <td>
                  {configItem.component({ data: dataItem[configItem.field] })}
                </td>
              ) : (
                <td>
                  {configItem.component({
                    data: dataItem[configItem.field].url,
                  })}
                </td>
              )
            ) : (
              <td>{dataItem[configItem.field]}</td>
            );
          })}
        </tr>
      ))}
    </tbody>
  </table>
);

export default Grid;
