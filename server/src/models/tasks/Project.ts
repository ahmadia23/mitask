import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { Task } from "./Task";
import { TaskStatus } from "../../types/tasks";

@Entity("projects")
export class Project {
  @PrimaryGeneratedColumn("uuid")
  id?: string;

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

  @Column({
    type: "varchar",
    length: 255,
  })
  image?: string;

  @OneToMany(() => Task, (task) => task.project)
  tasks?: Task[];

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;
}
