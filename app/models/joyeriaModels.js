import { pool } from "../../config/conectado.js";
import format from "pg-format";
import createSQLquery from "../../helpers/filter.js";

// Requerimiento 1: Obtener datos filtrados
export const getDataFilter = async (
  limit = 6,
  page = 1,
  order_by = "id_ASC"
) => {
  try {
    const [field, direction] = order_by.split("_");
    const offset = (page - 1) * limit;
    const SQLquery = format(
      "SELECT * FROM inventario ORDER BY %I %s LIMIT %L OFFSET %L;",
      field,
      direction,
      limit,
      offset
    );
    console.log(SQLquery);
    const response = await pool.query(SQLquery);
    return response.rows;
  } catch (error) {
    console.error("Error al obtener datos filtrados:", error.message);
    throw new Error("Error al obtener datos filtrados: " + error.message);
  }
};

// Requerimiento 2: Filtrar datos según criterios
export const dbFilterData = async (filters) => {
  try {
    const { SQLquery, values } = createSQLquery("inventario", filters);
    const response = await pool.query(SQLquery, values);
    console.log(response);
    return response.rows;
  } catch (error) {
    console.error("Error al filtrar datos:", error.message);
    throw new Error("Error al filtrar datos: " + error.message);
  }
};
