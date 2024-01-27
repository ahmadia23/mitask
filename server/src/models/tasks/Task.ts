import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { Project } from "./Project";
import { TaskStatus } from "../../types/tasks";

@Entity("tasks")
export class Task {
  @PrimaryGeneratedColumn("uuid")
  task_id?: string;

  @Column({
    type: "varchar",
    length: 255,
  })
  title?: string;

  @Column("text")
  description?: string;

  @Column("timestamp with time zone")
  deadline?: Date;

  @Column({
    type: "enum",
    enum: TaskStatus,
    default: TaskStatus.OPEN,
  })
  status?: TaskStatus;

  @OneToMany(() => Project, (project) => project.tasks)
  project?: Project;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
