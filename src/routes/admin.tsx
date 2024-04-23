import { cache, createAsync, redirect } from "@solidjs/router";

const isAuthorized = false;

const getUser = cache(async () => {
  "use server";

  console.log("getUser: before redirect");
  if (!isAuthorized) {
    throw redirect("/about");
  }
  console.log("getUser: after redirect");
  return {
    name: "John",
    age: 42,
  };
}, "getUser");

const Admin = () => {
  const res = createAsync(() => getUser());

  // server does unnecessary work here when redirecting
  console.log("Admin component"); // logs even after redirect

  return (
    <div>
      <h1>admin</h1>
      <p>{res()?.name}</p>
    </div>
  );
};

export default Admin;
