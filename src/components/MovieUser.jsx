import React, { useContext } from 'react'
import { movieContext } from './MovieProvider'



export function MovieUser() {
  const [movies, setMovies] = useContext(movieContext)

  return (
    <div>
      {movies.map(movie => {
        return (<div>
          <div>{movie.name}</div>
          <div>{movie.id}</div>
          <div>{movie.price}</div>


        </div>

        )
      }

      )}
    </div>
  )
}
