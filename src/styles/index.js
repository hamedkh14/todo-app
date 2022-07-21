import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { styled } from "@mui/system";

export const BoxGradientBackgroundStyle = styled(Box)(({ theme }) => ({
  backgroundImage: `linear-gradient(-225deg, #22E1FF 0%, #1D8FE1 48%, #625EB1 100%)`,
  width: "100%",
  height: "150px",
}));

export const ContainerStyle = styled(Box)(({ theme }) => ({
  width: "calc(100% - 40px)",
  maxWidth: "600px",
  position: "absolute",
  margin: "100px 20px 20px 20px",
  display: "flex",
  flexDirection: "column",
}));

export const AddTodoFormStyle = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: theme.shadows[2],
  width: "100%",
  maxWidth: "600px",
  height: "100px",
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  padding: 20,
}));

export const TextFieldStyle = styled(TextField)(({ theme }) => ({
  height: "10px",
  width: "calc(100% - 100px)",
  marginRight: "20px",
  verticalAlign: "top",
}));

export const AddButtonStyle = styled(Button)(({ theme }) => ({
  height: "40px",
  width: "80px",
  borderRarius: 4,
}));

export const TodoItem = styled(Stack)(({ theme }) => ({
  width: "100%",
  borderRarius: 4,
  backgroundColor: theme.palette.background.paper,
  marginTop: 10,
  boxShadow: theme.shadows[2],
  borderRadius: 4,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "8px",
}));

export const TodoItemText = styled(Typography, {
  shouldForwardProp: (prop) => prop !== "strike",
})(({ strike, theme }) => ({
  color: "gray",
  ...(strike && {
    textDecoration: "line-through",
  }),
}));
