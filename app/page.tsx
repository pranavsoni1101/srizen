import { ThemeSwitcher } from "@/components/theme-switcher";

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
const Home = () => {
    return(
        <>
            <h1>Home</h1>
            <ThemeSwitcher />
        </>
    )
}

export default Home;