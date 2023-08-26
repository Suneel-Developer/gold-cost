// pages/community/add.js
import Link from "next/link";

const AddCommunityPage = () => {
  return (
    <div>
      <p>Welcome to the Add Community Page!</p>
      <p>Choose a component to navigate to:</p>

      <ul>
        <li>
          <Link href="/community/all">All Community Page</Link>
        </li>
        <li>
          <Link href="/community/product">Product Page</Link>
        </li>
        {/* Add links to other components similarly */}
      </ul>
    </div>
  );
};

export default AddCommunityPage;
