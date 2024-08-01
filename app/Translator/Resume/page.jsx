"use client";
import Image from "next/image";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function page() {


  return (
    <div className=" relative z-50 ">
      <div>
        <h1 className="text-2xl md:text-5xl font-bold text-center py-10 px-4">
          Welcome! Have a look to my Journey as a Language Linguistic
        </h1>
      </div>

      <div className="w-5/6 mx-auto">
        <VerticalTimeline animate={true} lineColor="gray">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2017 - 2019"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            visible={true}
            icon={
              <Image
                width={1000}
                height={100}
                quality={100}
                src={"/Flexell.png"}
                className="rounded-full object-cover h-full"
                alt={""}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Supervisor</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dubai, UAE,{" "}
              <span className="font-semibold">Flexell International Ltd</span>
            </h4>
            <div className="flex flex-col mt-4">
              <span>
                Supervision in translation projects and trained junior
                translators.
              </span>
              <span>
                Ensures that all communication materials are appropriately
                translated.
              </span>
              <span> Proofread and edited all written materials.</span>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            date="2019 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <Image
                width={1000}
                height={100}
                quality={100}
                src={"/ALPHA.jpeg"}
                className="rounded-full object-cover "
                alt={""}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Operation Manager
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Dubai, UAE, <span className="font-semibold">ALPHA</span>
            </h4>
            <div className="flex flex-col mt-4">
              <span>
                Develop plans for the work system in the company and the
                necessary rules to facilitate work movement.
              </span>
              <span>
                Take the team's necessary decisions, help them implement tasks,
                and communicate the client's ideas.
              </span>
              <span> Proofread and edited all written materials.</span>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            date="2022 - 3 Months, Internship"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <Image
                width={1000}
                height={100}
                quality={100}
                src={"/1635514359868.jpg"}
                className="rounded-full object-cover "
                alt={""}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Project Manager</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Switzerland,{" "}
              <span className="font-semibold">Collot Baca Localization</span>
            </h4>
            <div className="flex flex-col mt-4">
              <span>Project Manager in Ooona.</span>
              <span>
                Clarifying with the client the specifications of the project.
              </span>
              <span>
                {" "}
                Worked with clients from{" "}
                <span className="font-semibold text-[#FF4654]">
                  Disney+
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#FF4654]">Netflix</span>.
              </span>
              <span>
                Assisting translators in solving technical issues or clarifying
                questions.
              </span>
              <span>
                Keeping weekly statistics of the produced minutes and words.
              </span>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--work"
            date="2022 - Present"
            iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
            icon={
              <Image
                width={1000}
                height={100}
                quality={100}
                src={"/download.jpg"}
                className="rounded-full object-cover "
                alt={""}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Linguistic Quality Assurance
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Singapore, <span className="font-semibold">Andovar</span>
            </h4>
            <div className="flex flex-col mt-4">
              <span>
                Reviewing translated materials for errors and inconsistencies.
              </span>
              <span>
                Ensuring the cultural appropriateness of the translated content.
              </span>
              <span>
                {" "}
                Maintaining consistency with the company's brand guidelines and
                industry standards.
              </span>
              <span>
                {" "}
                Providing feedback and suggestions for improvement to
                translation teams and vendors.
              </span>

              <span>
                {" "}
                Worked with{" "}
                <span className="font-semibold text-[#FF4654]">MBC Group</span>,
                <span className="font-semibold text-[#FF4654]">
                  Al-Ahli Saudi FC
                </span>{" "}
                and{" "}
                <span className="font-semibold text-[#FF4654]">GOAT GAMES</span>
                .
              </span>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--education"
            date="2023 - 2024"
            iconStyle={{ color: "#fff" }}
            icon={
              <Image
                width={1000}
                height={100}
                quality={100}
                src={"/1.webp"}
                className="rounded-full h-full  "
                alt={""}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Closed Caption Editor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Singapore,{" "}
              <span className="font-semibold">WORDS Language Solutions </span>
            </h4>
            <div className="flex flex-col mt-4">
              <span>
                Providing accurate translations for the daily morning news
                bulletin of an{" "}
                <span className="font-semibold text-[#FF4654]">
                  Australian Arabic news channel
                </span>
                , ensuring smooth communication between Arabic and
                English-speaking audiences.
              </span>
              <span>
                Collaborating with{" "}
                <span className="font-semibold text-[#FF4654]">
                  Gulf news channels like CNN, Al-Jazeera, BBC
                </span>{" "}
                to deliver high-quality translations of their bulletins into
                English.
              </span>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--education"
            date="2022 - 2024"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={
              <Image
                width={1000}
                height={100}
                quality={100}
                src={"/logo-1.png"}
                className="rounded-full h-full "
                alt={""}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Subtitler & Transcriptionist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              India, <span className="font-semibold">Sirri Translations </span>
            </h4>
            <div className="flex flex-col mt-4">
              <span>
                Specialization in transcribing and translating global interviews
                and news bulletins, particularly focusing on significant
                developments in Arab and Turkish regions.
              </span>

              <span>
                Expertise in English-to-Arabic and Arabic-to-English
                localization services.
              </span>
              <span>
                Proficiency in English-to-Turkish and Turkish-to-English
                localization.
              </span>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--education"
            date="2021 - 6 Months, Internship"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={
              <Image
                width={1000}
                height={100}
                quality={100}
                src={"/643d11b454483.jpg"}
                className="rounded-full h-full object-cover "
                alt={""}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Subtitler & Transcriptionist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Denmark, <span className="font-semibold">Hilal Play </span>
            </h4>
            <div className="flex flex-col mt-4">
              <span>Subtitling from Turkish to English</span>
              <span>Subtitling from Turkish to Arabic</span>
              <span>
                {" "}
                Editing, grammar check, and proofreading for subtitles.
              </span>
            </div>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--education"
            date="2023 - 9 Months, Internship"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={
              <Image
                width={1000}
                height={100}
                quality={100}
                src={"/PinnacleWhite+Logo.png"}
                className="rounded-full  h-full  "
                alt={""}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">
              Subtitler & Transcriptionist
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Pakistan,{" "}
              <span className="font-semibold">Pinnacles Productions </span>
            </h4>
            <div className="flex flex-col mt-4">
              <span>
                Freelancer offers language localization to{" "}
                <span className="font-semibold text-[#FF4654]">
                  Aramco Group
                </span>{" "}
                for Saudi lifestyle interviews.
              </span>
              <span>
                Specialized in English-to-Arabic and Arabic-to-English
                localization.{" "}
              </span>
              <span>
                {" "}
                Proficient in English-to-Turkish and Turkish-to-English
                localization.
              </span>
              <span> Emphasis on cultural accuracy and professionalism.</span>
              <span>
                {" "}
                Committed to industry standards for authentic communication.
              </span>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--education"
            date="2021 - 2023"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={
              <Image
                width={1000}
                height={100}
                quality={100}
                src={"/unnamed.jpg"}
                className="rounded-full  h-full  "
                alt={""}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">MTPE Specialist</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Egypt, <span className="font-semibold">TrensTech </span>
            </h4>
            <div className="flex flex-col mt-4">
              <span>
                Post-editing machine-translated content from English to Arabic
                to improve its linguistic quality and readability.
              </span>
              <span>
                Checking the accuracy of the machine-generated translation and
                ensuring it meets the client's requirements.{" "}
              </span>
              <span>
                {" "}
                Correcting errors in grammar, punctuation, and spelling and
                improving the overall fluency of the translated content.
              </span>
              <span>
                {" "}
                Providing feedback to machine translation engines and
                development teams to help improve the quality of future
                translations.
              </span>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            visible={true}
            className="vertical-timeline-element--education"
            date="2023 - 2024"
            iconStyle={{ background: "rgb(233, 30, 99)", color: "#fff" }}
            icon={
              <Image
                width={1000}
                height={100}
                quality={100}
                src={"/unnamed (4).jpg"}
                className="rounded-full  h-full  "
                alt={""}
              />
            }
          >
            <h3 className="vertical-timeline-element-title">Subtitler</h3>
            <h4 className="vertical-timeline-element-subtitle">
              USA, <span className="font-semibold">Vice News & Fox News </span>
            </h4>
            <div className="flex flex-col mt-4">
              <span>
                Accurately transcribing and timing the spoken dialogue of video
                footage related to the earthquakes in Turkey and Syria.
              </span>
              <span>
                Editing and adjusting subtitles to ensure that they are
                grammatically correct, culturally appropriate, and easy to read
                for viewers.{" "}
              </span>

              <span>
                {" "}
                Translating any non-English dialogue into English while ensuring
                that the subtitles remain faithful to the original meaning and
                intent of the speakers.
              </span>
            </div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            iconStyle={{ background: "rgb(16, 204, 82)", color: "#fff" }}
          />
        </VerticalTimeline>
      </div>
    </div>
  );
}
