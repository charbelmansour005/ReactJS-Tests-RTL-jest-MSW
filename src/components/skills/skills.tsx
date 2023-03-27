import { useEffect, useState } from "react"
import { SkillsProps } from "./skills.types"

export function Skills(props: SkillsProps) {
  const { skills } = props
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  //   useEffect(() => {
  //     setTimeout(() => {
  //       setIsLoggedIn(true)
  //     }, 500)
  //     // if setTimeOut was 1001 ms, 'byByRole' test will fail
  //   }, [])

  // This below useEffect will only work if the test has a setTimeOut of 2000ms
  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true)
    }, 1001)
  }, [])

  return (
    <>
      <ul>
        {/* <ul></ul> getByRole = 'list' */}
        {skills.map((skill) => {
          return (
            <li data-testid="my-list" key={skill}>
              {skill}
            </li>
          ) // <li></li> getAllByRole = 'listitem'
        })}
      </ul>
      {isLoggedIn ? (
        <button>Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  )
}
