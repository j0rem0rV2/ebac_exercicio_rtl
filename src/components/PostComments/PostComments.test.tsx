import { fireEvent, render, screen } from "@testing-library/react";
import PostComment from "./index";

describe("Teste para o componente PostComment", () => {
  it("Deve renderizar o componente corretamente", () => {
    render(<PostComment />);
    expect(screen.getByText("Comentar")).toBeInTheDocument();
  });

  it("Deve adicionar mais tres comentarios", () => {
    render(<PostComment />);

    fireEvent.change(screen.getByTestId("textoDoComentario"), {
      target: {
        value: "Primeiro comentario",
      },
    });
    fireEvent.click(screen.getByTestId("botaoDoComentario"));

    fireEvent.change(screen.getByTestId("textoDoComentario"), {
      target: {
        value: "Segundo comentário",
      },
    });
    fireEvent.click(screen.getByTestId("botaoDoComentario"));

    expect(screen.getAllByTestId("comentario")).toHaveLength(2);
  });
});
