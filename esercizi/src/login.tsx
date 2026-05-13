export function Login() {
    return (
        <div>
            <form
                onSubmit={(event) => {
                    event.preventDefault()

                    const formData = new FormData(event.target)
                   console.log(formData.get("username")) 
                    console.log(formData.get("password"))
                }}
            >
                <input type="email" name="username" />
                
                <input type="password" name="password" />

                <button type="submit">
                    Log-in
                </button>
            </form>
        </div>
    )
}