import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { ArrowSquareDown, Paperclip } from "phosphor-react";
import { NewProfileContainer } from "./styles";

const newProfileFormValidationSchema = z.object({
  name: z.string(),
  resolutionComments: z.string(),
  attachment: z.any(),
  linkedinURL: z.string(),
  githubURL: z.string(),
  skill: z.string(),
  status: z.string(),
  owner: z.string(),
  resolvedOn: z.string(),
  feedback: z.string(),
});

type NewProfileFormDataProps = z.infer<typeof newProfileFormValidationSchema>;

export function NewProfileForm() {
  const newWorkItemForm = useForm<NewProfileFormDataProps>({
    resolver: zodResolver(newProfileFormValidationSchema),
    defaultValues: {
      name: "",
      resolutionComments: "",
      attachment: "",
      linkedinURL: "",
      githubURL: "",
      skill: "Select",
      status: "Select",
      owner: "Select",
      resolvedOn: "",
      feedback: "",
    },
  });

  async function handleSubmitNewProfile(data: NewProfileFormDataProps) {
    console.log(data);
    reset();
  }

  const { register, handleSubmit, reset } = newWorkItemForm;
  return (
    <NewProfileContainer>
      <h1>NEW PROFILE</h1>
      <form action="" onSubmit={handleSubmit(handleSubmitNewProfile)}>
        <div className="formsLeft">
          <label>
            Name*
            <input
              type="text"
              placeholder="Enter the title"
              {...register("name")}
            />
          </label>
          <label>
            Resolution Comments
            <textarea rows={10} {...register("resolutionComments")} />
          </label>
          <label className="uploadFile">
            Attachments
            <input type="file" {...register("attachment")} />
            <div>
              <Paperclip size={20} />
              <span>Upload File</span>
            </div>
          </label>
          <label>
            Linkedin URL
            <input
              type="text"
              placeholder="Enter Linkedin URL (Link)"
              {...register("linkedinURL")}
            />
          </label>
          <label>
            GitHub URL
            <input
              type="text"
              placeholder="Enter Linkedin github URL (Link)"
              {...register("githubURL")}
            />
          </label>
        </div>
        <div className="formsRight">
          <label>
            <span>Skill*</span>
            <select id="title" {...register("skill")}>
              <option value="0">Select</option>
              <option value=".NET">.NET</option>
              <option value="ReactJS">ReactJS</option>
              <option value="Angular">Angular</option>
              <option value="Java">Java</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Status*</span>
            <select id="title" {...register("status")}>
              <option value="0">Select</option>
              <option value="Done">Done</option>
              <option value="Undone">Undone</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Owner</span>
            <select id="title" {...register("owner")}>
              <option value="0">Select</option>
              <option value="Giba">Giba</option>
              <option value="Willian">Willian</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Resolved on*</span>
            <input
              type="text"
              {...register("resolvedOn")}
              placeholder="00/00/0000"
            />
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label className="feedbackTextArea">
            <span>Feedback*</span>
            <textarea cols={30} rows={8} {...register("feedback")}></textarea>
          </label>
          <div className="formButtons">
            <button>CANCEL</button>
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </NewProfileContainer>
  );
}
