import { SignedIn, SignedOut, SignInButton, SignOutButton, UserButton,useUser } from '@clerk/clerk-react'

export default function Clerk() {
  const { isSignedIn } = useUser();
  return (
    <div style={styles.container}>
    <div style={styles.card}>
      <h1 style={styles.heading}>Welcome to StockIt!</h1>
      <p style={styles.subheading}>Sign in to access your account</p>
      {isSignedIn ? (
          <SignOutButton style={styles.button}>Sign Out</SignOutButton>
        ) : (
          <SignInButton
            style={styles.button}
            forceRedirectUrl="http://localhost:3000/portfolio"
            mode="modal"
          >
            Sign In
          </SignInButton>
        )}
      
    </div>
    
  </div>
  
  )
}
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#f7f9fc",
  },
  card: {
    textAlign: "center",
    padding: "2rem",
    borderRadius: "10px",
    backgroundColor: "white",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    maxWidth: "400px",
    width: "100%",
  },
  heading: {
    fontSize: "2rem",
    color: "#333",
    marginBottom: "1rem",
  },
  subheading: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "1.5rem",
  },
  button: {
    backgroundColor: "#4caf50",
    color: "white",
    padding: "0.75rem 1.5rem",
    border: "none",
    borderRadius: "5px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  buttonHover: {
    backgroundColor: "#45a049",
  },
};