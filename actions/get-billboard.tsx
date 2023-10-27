import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

const getBillboard = async (id: string): Promise<Billboard> => {
  const res = await fetch(`${URL}/${id}`);

  return res.json();
};

export default getBillboard;
NEXT_PUBLIC_API_URL =
  "http://localhost:3001/api/192dbb95-cac7-423b-b184-495fde3a8b3f";
NEXT_PUBLIC_API_URL_2 =
  "http://localhost:3000/api/b809aefd-1305-430e-b03e-4f2329c93ade";
