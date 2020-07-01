using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LMIS_Web.Migrations
{
    public partial class addedtUserstBranchtServiceRequesttClients : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "tBranch",
                columns: table => new
                {
                    BranchId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BranchManagerId = table.Column<long>(nullable: false),
                    BranchCode = table.Column<string>(nullable: true),
                    BranchAddress = table.Column<string>(nullable: true),
                    BranchName = table.Column<string>(nullable: true),
                    BranchContactNo = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tBranch", x => x.BranchId);
                });

            migrationBuilder.CreateTable(
                name: "tClients",
                columns: table => new
                {
                    ClientId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    ClientCode = table.Column<string>(nullable: true),
                    ClientName = table.Column<string>(nullable: true),
                    ClientAddress = table.Column<string>(nullable: true),
                    ClientContactNo = table.Column<string>(nullable: true),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    UserId = table.Column<long>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tClients", x => x.ClientId);
                });

            migrationBuilder.CreateTable(
                name: "tServiceRequests",
                columns: table => new
                {
                    ServiceReqId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    BranchId = table.Column<long>(nullable: false),
                    ClientId = table.Column<long>(nullable: false),
                    Origin = table.Column<string>(nullable: true),
                    Destination = table.Column<string>(nullable: true),
                    StartDate = table.Column<DateTime>(nullable: false),
                    EndDate = table.Column<DateTime>(nullable: false),
                    ServiceRequestStatus = table.Column<int>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    Description = table.Column<string>(nullable: true),
                    Comment = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tServiceRequests", x => x.ServiceReqId);
                });

            migrationBuilder.CreateTable(
                name: "tUsers",
                columns: table => new
                {
                    UserId = table.Column<long>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserCode = table.Column<string>(nullable: true),
                    RoleId = table.Column<long>(nullable: false),
                    BranchId = table.Column<long>(nullable: false),
                    DateCreated = table.Column<DateTime>(nullable: false),
                    IsActive = table.Column<bool>(nullable: false),
                    IsEmployee = table.Column<bool>(nullable: false),
                    Username = table.Column<string>(nullable: true),
                    Password = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_tUsers", x => x.UserId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "tBranch");

            migrationBuilder.DropTable(
                name: "tClients");

            migrationBuilder.DropTable(
                name: "tServiceRequests");

            migrationBuilder.DropTable(
                name: "tUsers");
        }
    }
}
