import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from 'typeorm'

@Entity()
export default class Rune extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number

  @Column('text', { nullable: false })
  src!: string

  @Column('text', { nullable: false, unique: true })
  file_name!: string

  public toJSON(): Rune {
    const json: Rune = Object.assign({}, this)

    return json
  }
}
