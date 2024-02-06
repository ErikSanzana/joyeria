import { PORT } from "../config/postgress.js";

const prepareHateoas = async (
    dbTable,
    data,
) => {
    const results = data
      .map((e) => {
        return {
            name: e.nombre,
          href: `http://localhost:${PORT}/${dbTable}/${e.id}`,
        };
      })
        .slice(0, data.length );
    
    const total = data.length;


    const HATEOAS = {
      total,
      results,
    };
    console.log(HATEOAS)
    return HATEOAS;
  };
  
  
  export default prepareHateoas;