import { Link, V2_MetaFunction } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [{ title: "New Remix App" }];
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Remix</h1>
      <ul>
        <li>
          <Link to="hobby">Hobby</Link>
        </li>
        <li>
          <Link to="posts/example">Example</Link>
        </li>
        <li>
          <Link to="posts/trial">Trial</Link>
        </li>
      </ul>
    </div>
  );
}
