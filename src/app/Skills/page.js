import TrueFocus from "../ReactBits/TrueFocus";
import {skills} from "../data/skills"
import ShinyText from "../ReactBits/ShinyText";


export default function Skills() {
  return (
    <div className="mt-12 flex flex-col items-center justify-center">
          <h2 className="text-6xl font-bold text-customGreen mb-8 text-center">
            <TrueFocus
              sentence="My Skills"
              manualMode={false}
              blurAmount={2.5}
              borderColor="cyan"
              animationDuration={2}
              pauseBetweenAnimations={1}
            />
          </h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
            {skills.map((skill) => (
              <div
                key={skill}
                className="bg-black/30 px-6 py-3 rounded-lg text-lg font-bold font-mono shadow-md"
              >
                <ShinyText
                  text={skill}
                  disabled={false}
                  speed={3}
                  className="custom-class"
                />
              </div>
            ))}
          </div>
        </div>
  );
}



