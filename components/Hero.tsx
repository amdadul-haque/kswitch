import { Fjalla_One } from "next/font/google"
import MyContainer from "./MyContainer"
import Link from "next/link"

const fajalla = Fjalla_One({
  weight: '400',
  subsets: ['latin'],
})

const Hero = () => {
  return (
    <>
      <MyContainer className="h-[75vh] bg-hero bg-center bg-no-repeat">
        <div className="w-full h-full flex flex-col justify-center items-center gap-4">
          <h2 className={`text-[44px] md:text-[62px] tracking-tight font-bold text-brand leading-none ${fajalla.className}`}>INCREASE VEHICLE SECURITY</h2>
          <p className="text-[22px] ">Choose the Vehicle Anti-Theft System that best fits your budget and needs.</p>
          <Link href='/'>
            <button className="uppercase px-10 py-4 rounded-md bg-brand hover:bg-brand-hover transition-all duration-300">Contact Us</button >
          </Link>
        </div>
      </MyContainer >
      <div className="h-screen">
      </div>
    </>

  )
}

export default Hero