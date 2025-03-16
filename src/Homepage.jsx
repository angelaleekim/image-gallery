import { ImageEditForm } from "./images/ImageEditForm";

export function Homepage(props) {
  return (
    <div className="outer-div">
      <ImageEditForm />
      <h2>Welcome, {props.userName}</h2>
      <p>This is the content of the home page.</p>
    </div>
  );
}
