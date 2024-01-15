import Swal from "sweetalert2";

const successAlert = (title) => {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: title || "Your work has been saved",
    showConfirmButton: false,
    timer: 1500,
  });
};

export default successAlert;
