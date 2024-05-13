import "./approach-new.scss";
export default function JuiceboxPageDemo() {
  return (
    <div className="bg-black">
      <div className="flex min-h-[100vh] items-center justify-center bg-violet-500 text-3xl">Previous section here</div>

      <div className="approach">
        <div className="images-wrapper">
          <img
            src="/pictures/meaningful_connections_image1.png"
            alt="First Background"
            className="background-image first-image"
          />
          <img
            src="/pictures/meaningful_connections_image2.png"
            alt="Second Background"
            className="background-image second-image"
          />
        </div>
        <div className="text-content-wrapper">
          <h1 className="title">
            Get the
            <span className="gradient-text"> `Meaningful Connections` </span>
            White Paper!
          </h1>
          <h2 className="subtitle">
            This reports examines out integrated approach and explores contemporary factors that are shaping our next
            generation of digital products.
          </h2>
          <div className="download">
            <a href="/#">Download</a>
          </div>
        </div>
      </div>

      <div className="flex min-h-[100vh] items-center justify-center bg-violet-500 text-3xl">Next section here</div>
    </div>
  );
}

// //TAILWIND VERSION
// export default function JuiceboxPageDemo() {
//   return (
//     <div className="bg-black">
//       <div className="flex min-h-[100vh] items-center justify-center bg-violet-500 text-3xl">Previous section here</div>

//       <div className="relative min-h-[300vh]">
//         <div className="absolute bottom-[100vh] h-[100vh] w-full bg-green-500/50">
//           <img
//             src="/pictures/meaningful_connections_image1.png"
//             alt="First Background"
//             className="background-image first-image absolute right-0 top-0 h-[520px] w-[432px]"
//           />
//           <img
//             src="/pictures/meaningful_connections_image2.png"
//             alt="Second Background"
//             className="background-image second-image absolute left-0 bottom-0
//             h-[520px] w-[432px]"
//             //top-[260px]
//           />
//         </div>
//         <div className="sticky top-0 flex min-h-[100vh] flex-col justify-center bg-red-500/50 text-center text-xl text-white">
//           <h1 className="title">
//             Some title
//             <span className="gradient-text"> goes here </span>
//             and other text continues
//           </h1>
//           <h2 className="subtitle">And here we have another subtitle</h2>
//           <div className="download">
//             <a href="/#">Download</a>
//           </div>
//         </div>
//       </div>

//       <div className="flex min-h-[100vh] items-center justify-center bg-violet-500 text-3xl">Next section here</div>
//     </div>
//   );
// }
