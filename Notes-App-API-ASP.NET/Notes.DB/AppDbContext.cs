using Microsoft.EntityFrameworkCore;

namespace Notes.DB
{
    public class AppDbContext : DbContext
    {
            public DbSet<Note> Notes { get; set; }

            protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
            {
                optionsBuilder.UseSqlServer(
                    @"Server=DESKTOP-89L3UD6\SQLEXPRESS;Database=Notes;Integrated Security=True");
            }
    }
}
