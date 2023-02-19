import Link from 'next/link';
import Button from '@mui/material/Button';


export default function Header() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/about" >About</Link>
      </li>
      <li>
      <div>
      <Button variant="contained">Hello World</Button>
    </div>
      </li>
    </ul>
  );
}