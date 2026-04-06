import { useEffect } from "react";
import { request } from "../api/api";

export default function Competitions() {
  useEffect(() => {
    async function test() {
      const data = await request("/competitions");
      console.log("ДАННЫЕ:", data);
    }

    test();
  }, []);

  return <div>Лиги</div>;
}
