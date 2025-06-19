// import { MigrationInterface, QueryRunner } from 'typeorm'

// export class AddAgentsLimitToPlatformPlan1749917984363 implements MigrationInterface {
//     name = 'AddAgentsLimitToPlatformPlan1749917984363'

//     public async up(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`
//             ALTER TABLE "platform_plan"
//             ADD "agentsLimit" integer
//         `)
//     }

//     public async down(queryRunner: QueryRunner): Promise<void> {
//         await queryRunner.query(`
//             ALTER TABLE "platform_plan" DROP COLUMN "agentsLimit"
//         `)
//     }

// }
import { MigrationInterface, QueryRunner } from 'typeorm'

export class AddAgentsLimitToPlatformPlan1749917984363 implements MigrationInterface {
  name = 'AddAgentsLimitToPlatformPlan1749917984363'

  public async up(queryRunner: QueryRunner): Promise<void> {
    // Skipped for CE version
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // Skipped
  }
}
