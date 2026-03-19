function Lab() {
  const isLoggedIn: boolean = true;   // declare before return

  return (
    <div>
      {isLoggedIn ? <h2>Welcome User</h2> : <h2>Please Login</h2>}
    </div>
  );
}

export default Lab;
