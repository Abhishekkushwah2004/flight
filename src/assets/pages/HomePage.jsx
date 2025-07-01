import Footer from "../sections/Footer"
import { Navbar } from "../sections/Navbar"
import PopularDestinations from "../sections/PopularDestinations"
import PopularStays from "../sections/PopularStays"
import RecentSearches from "../sections/RecentSearches"
import RecommendedHolidays from "../sections/RecommendedHolidays"
import SearchSection from "../sections/SearchSection"
import Subscribe from "../sections/Subscribe"

export default function HomePage() {
    return (
        <>
            <Navbar />
            <SearchSection />
            <RecentSearches/>
            <PopularDestinations/>
            <RecommendedHolidays/>
            <PopularStays/>
            <Subscribe/>
            <Footer/>
        </>
    )
}