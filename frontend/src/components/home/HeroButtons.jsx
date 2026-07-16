import { useNavigate } from "react-router-dom";
import Button from "../ui/Button";

function HeroButtons() {
  const navigate = useNavigate();
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
      <Button onClick={() => navigate("/login")} className="w-38 sm:w-auto">
        Vote Now
      </Button>
      <Button
        onClick={() =>
          document
            .getElementById("elections")
            ?.scrollIntoView({ behavior: "smooth" })
        }
        variant="outline"
        className="px-8 py-3"
      >
        Learn More
      </Button>
    </div>
  );
}

export default HeroButtons;
