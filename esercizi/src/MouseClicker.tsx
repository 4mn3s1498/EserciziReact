export function MouseClicker() {
  return (
    <div>
      <button
        name="one"
        onClick={(event) => {
          console.log(event.currentTarget.name)
        }}
      >
        <img
          src="hero.png"
          onClick={(e) => {
            console.log(e.target.src)
            e.stopPropagation()
          }}
        />
        Cliccami
      </button>
    </div>
  )
}