import { Box, styled } from "@mui/material";

const itemData = [
  {
    img: "/src/assets/images.png",
    id: 1,
  },
  {
    img: "/src/assets/chat.png",
    id: 2,
  },
  {
    img: "/src/assets/face.png",
    id: 3,
  },
  {
    img: "/src/assets/google.png",
    id: 4,
  },
];

const BrandWraper = styled(Box)(({ theme }) => ({
  marginTop: "4rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  "& > img": {
    height: "60px",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",

    "& > img": {
      width: "60px",
      marginBottom: "2rem",
    },
  },
}));

const Brand = () => {
  return (
    <BrandWraper>
      {itemData.map((im) => (
        <img src={im.img} alt="" key={im.id} />
      ))}
    </BrandWraper>
  );
};

export default Brand;
