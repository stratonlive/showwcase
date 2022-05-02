import type { NextPage } from 'next'
import Shape from '@components/UI/atom/shape/shape'
import Inverted from '@components/UI/atom/shape/inverted'
import LoginComponent from '@components/UI/organisms/home/home'

const Home: NextPage = () => {
  return (
    <>

      <section className="bg-orange-500 lg:max-h-600 md:max-h-780">
        <Shape></Shape>

        <div className="flex flex-wrap items-center justify-center">
          <LoginComponent></LoginComponent>
        </div>
        <br />
      </section> 

      <section>
        <Inverted />
      </section>
    </>
  )
}

export default Home
