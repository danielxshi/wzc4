import LargeContent from "../organisms/LargeContent";
import Hero from "../../public/images/IMG_8355.JPG";
export default function SelfIntro() {
  return (
    <div className="bg--primary--white">
      <LargeContent imageSrc={Hero}>
        {/* <div className="mb-4">
          <h3 className="font-bold text-2xl mb-4">加拿大温州同乡总会宗旨</h3>
          <h6 className="font-bold text-xl mb-4">团结、互助、携手、共进</h6>
        </div> */}
        <div className="text--content">
          <div>
            <h5 className="text-xl">朱建國會長</h5>
            <h5 className="text-xl">Jianguo Zhu, President</h5>
          </div>
          <div>
            <h5 className="text-xl">加拿大温州商會 </h5>
            <h5 className="text-xl">Wenzhou Business Association Canada</h5>
          </div>

          <div>
            <h5 className="text-xl">加拿大温州同鄉總會 </h5>
            <h5 className="text-xl">Wenzhou Friendship Society Canada</h5>
          </div>

          <div>
            <h5 className="text-xl">國結 五助務事共進</h5>
            <h5 className="text-xl">Shared Progress, Shared Success!</h5>
          </div>
        </div>

        <a
          href="/contact"
          className="text-base text-center mt-4 w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          联系我们
        </a>
      </LargeContent>
    </div>
  );
}
