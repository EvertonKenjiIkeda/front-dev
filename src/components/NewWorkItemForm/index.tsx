import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { ArrowSquareDown, Paperclip } from "phosphor-react";
import { NewWorkItemContainer } from "./styles";

const newWorkFormValidationSchema = z.object({
  title: z.string(),
  description: z.string(),
  attachment: z.any(),
  linkedinURL: z.string(),
  projectName: z.string(),
  workLocation: z.string(),
  skill: z.string(),
  status: z.string(),
  owner: z.string(),
  priority: z.string(),
  seniority: z.string(),
  experienceYears: z.string(),
  customer: z.string(),
  replacement: z.string(),
  rgs: z.string(),
  cp: z.string(),
});

type NewWorkFormDataProps = z.infer<typeof newWorkFormValidationSchema>;

export function NewWorkItemForm() {
  const newWorkItemForm = useForm<NewWorkFormDataProps>({
    resolver: zodResolver(newWorkFormValidationSchema),
    defaultValues: {
      title: "",
      description: "",
      attachment: "",
      linkedinURL: "",
      projectName: "",
      workLocation: "",
      skill: "Select",
      status: "Select",
      owner: "Select",
      priority: "Select",
      seniority: "Select",
      experienceYears: "",
      customer: "",
      replacement: "",
      rgs: "",
      cp: "",
    },
  });

  const { register, handleSubmit, reset } = newWorkItemForm;

  async function handleSubmitNewWorkItem(data: NewWorkFormDataProps) {
    console.log(data);
    reset();
  }

  return (
    <NewWorkItemContainer>
      <h1>NEW WORKITEM</h1>
      <form action="" onSubmit={handleSubmit(handleSubmitNewWorkItem)}>
        <div className="formsLeft">
          <label>
            Title*
            <input
              type="text"
              placeholder="Enter the title"
              {...register("title")}
            />
          </label>
          <label>
            Description
            <textarea id="" rows={10} {...register("description")} />
          </label>
          <label className="uploadFile">
            Attachments
            <input type="file" id="" {...register("attachment")} />
            <div>
              <Paperclip size={20} />
              <span>Upload File</span>
            </div>
          </label>
          <label>
            Linkedin open position URL
            <input
              type="text"
              placeholder="Enter Linkedin open position URL (Link)"
              {...register("linkedinURL")}
            />
          </label>
          <label>
            Project / Squad / Team Name
            <input
              type="text"
              placeholder="Enter Project / Squad / Team Name"
              {...register("projectName")}
            />
          </label>
          <label>
            Work Location
            <input
              type="text"
              placeholder="Enter Work Location"
              {...register("workLocation")}
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
              <option value="Open Position">Open Position</option>
              <option value="Closed Position">Closed Position</option>
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
            <span>Priority*</span>
            <select id="title" {...register("priority")}>
              <option value="0">Select</option>
              <option value="Urgent">Urgent</option>
              <option value="Normal">Normal</option>
              <option value="Low">Low</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Seniority Required*</span>
            <select id="title" {...register("seniority")}>
              <option value="0">Select</option>
              <option value="Junior">Junior</option>
              <option value="Pleno">Pleno</option>
              <option value="Senior">Senior</option>
              <option value="Expert">Expert</option>
            </select>
            <ArrowSquareDown size={15} className="selectArrow" />
          </label>
          <label>
            <span>Minimum Experience Years*</span>
            <input
              type="text"
              pattern="[0-9]*"
              {...register("experienceYears")}
              placeholder="0"
            />
          </label>
          <label>
            <span>Customer</span>
            <input type="text" {...register("customer")} />
          </label>
          <label>
            <span>New Position or replace</span>
            <input type="text" {...register("replacement")} />
          </label>
          <label>
            <span>RGS</span>
            <input type="text" {...register("rgs")} />
          </label>
          <label>
            <span>CP</span>
            <input type="text" {...register("cp")} />
          </label>
          <div className="formButtons">
            <button>CANCEL</button>
            <button type="submit">SUBMIT</button>
          </div>
        </div>
      </form>
    </NewWorkItemContainer>
  );
}
