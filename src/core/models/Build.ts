import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  BaseEntity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm'
import User from './User'

@Entity()
export default class Build extends BaseEntity {

  @PrimaryGeneratedColumn()
  id!: number

  @Column({ nullable: false, })
  uuid_creator!: string

  @Column({ nullable: false })
  id_champ!: number

  @Column({ nullable: false })
  item1!: string

  @Column({ nullable: false })
  item2!: string

  @Column({ nullable: false })
  item3!: string

  @Column({ nullable: false })
  item4!: string

  @Column({ nullable: false })
  item5!: string

  @Column({ nullable: false })
  item6!: string

  @Column({ nullable: false })
  sum1!: string

  @Column({ nullable: false })
  sum2!: string

  @Column({ nullable: false })
  rp1!: string

  @Column({ nullable: false })
  rp2!: string

  @Column({ nullable: false })
  rp3!: string

  @Column({ nullable: false })
  rp4!: string

  @Column({ nullable: false })
  rs1!: string

  @Column({ nullable: false })
  rs2!: string

  @Column({ nullable: false })
  rt1!: string

  @Column({ nullable: false })
  rt2!: string

  @Column({ nullable: false })
  rt3!: string

  @Column({ nullable: true })
  commentaire!: string

  @CreateDateColumn()
  createdAt!: string

  @UpdateDateColumn()
  updatedAt!: string

  @ManyToOne(() => User, (user: User) => user.build, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'uuid_creator' })
  user!: User

  /**
   * Methods
   */
  public toJSON(): Build {
    const json = Object.assign({}, this)

    return json
  }
}
