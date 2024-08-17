import SideBar from "../components/side-bar";

export default function Page() {
  return (
    <div>
      <div className="flex flex-1">
        <SideBar />
        <div className="flex-1 bg-muted/40">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit ex
          natus inventore dolore neque praesentium a provident laboriosam
          officiis quasi illo, qui quaerat rerum laborum consequuntur possimus
          quas necessitatibus incidunt.
          {/* ここが文字の範囲だけしか背景色あたっていない */}
        </div>
      </div>
    </div>
  );
}
