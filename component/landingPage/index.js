import HeadPage from "../layout/headPage"
import TITLES from "@/utils/constants/title"
import TopSection from "./topSection"
import CounterSections from "./counterSections" 
import BecomeAnInstructor from "./becomeAnInstructor"
import ReviewRating from "./reviewRating"

 function LandingPage(){
    return(
        <HeadPage title={TITLES.home}>
      <main>
       <TopSection />
       <CounterSections />
       <BecomeAnInstructor/>
       <ReviewRating />
      </main>
    </HeadPage>
    )
}
export default LandingPage;