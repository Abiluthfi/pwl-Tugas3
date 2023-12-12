import { useNavigate } from "react-router-dom";
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>404</h1>
      <h3>MAAF, HALAMAN TIDAK DITEMUKAN</h3>
      <br />
      <button onClick={() => navigate("./")}>Kembali</button>
    </div>
  );
};

export default NotFound;
