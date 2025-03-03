export function AccountSettings(props) {
  function updateUserName(event) {
    props.setUserName(event.target.value);
  }
  return (
    <div className="outer-div">
      <h2>Account settings</h2>
      <label>
        Username <input onChange={updateUserName} />
      </label>
      <p>
        <i>Changes are auto-saved.</i>
      </p>
    </div>
  );
}
