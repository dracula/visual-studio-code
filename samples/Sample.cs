#nullable enable
#define DEBUG_MODE

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using static System.Console;
using Json = System.Text.Json.JsonSerializer;

namespace Alchemortis.Sample
{
    /// <summary>
    /// Demonstrates most of C#'s syntactic elements to
    /// validate the colors for comments, keywords, types, strings, and literals.
    /// </summary>
    [Serializable]
    [Obsolete("Apenas para fins de demonstração do tema.")]
    public abstract class Vampire : IComparable<Vampire>, IEquatable<Vampire>
    {
        public const int MaxAge = 1000;
        private static readonly Random _rng = new();

        public string Name { get; init; }
        public int Age { get; set; }
        public bool IsAwake => DateTime.Now.Hour is >= 20 or < 6;

        protected Vampire(string name, int age)
        {
            Name = name ?? throw new ArgumentNullException(nameof(name));
            Age = age;
        }

        public abstract Task<string> HuntAsync(CancellationToken token = default);

        public virtual void Speak(string message = "...") => WriteLine($"{Name} sussurra: \"{message}\"");

        public int CompareTo(Vampire? other) => other is null ? 1 : Age.CompareTo(other.Age);

        public bool Equals(Vampire? other) => other is not null && Name == other.Name;

        public override bool Equals(object? obj) => obj is Vampire v && Equals(v);

        public override int GetHashCode() => HashCode.Combine(Name, Age);

        public static bool operator ==(Vampire? a, Vampire? b) => a?.Equals(b) ?? b is null;
        public static bool operator !=(Vampire? a, Vampire? b) => !(a == b);
    }

    public sealed class Dracula : Vampire
    {
        private readonly List<string> _victims = new();

        public Dracula(string name, int age) : base(name, age) { }

        public override async Task<string> HuntAsync(CancellationToken token = default)
        {
            await Task.Delay(TimeSpan.FromMilliseconds(200), token);

            string victim = _rng.Next(2) == 0 ? "camponês" : "viajante perdido";
            _victims.Add(victim);

            return victim switch
            {
                "camponês" => "Sangue simples, mas satisfatório.",
                "viajante perdido" => "Ah, um forasteiro... delicioso.",
                _ => throw new InvalidOperationException("Vítima desconhecida"),
            };
        }

        public IEnumerable<string> Victims
        {
            get
            {
                foreach (var v in _victims)
                    yield return v.ToUpperInvariant();
            }
        }

        public string this[int index] => _victims[index];
    }

    public record Castle(string Name, int Rooms, IReadOnlyList<Vampire> Residents)
    {
        public bool IsHaunted { get; init; } = true;
    }

    public struct Coordinates
    {
        public double X, Y;

        public readonly double DistanceTo(Coordinates other)
        {
            double dx = X - other.X, dy = Y - other.Y;
            return Math.Sqrt(dx * dx + dy * dy);
        }
    }

    public enum BloodType : byte
    {
        O = 0,
        A = 1,
        B = 2,
        AB = 3,
    }

    public delegate void HowlHandler(object sender, EventArgs e);

    public static class VampireExtensions
    {
        public static bool IsAncient(this Vampire vampire) => vampire.Age >= Vampire.MaxAge / 2;

        public static IEnumerable<T> Shuffle<T>(this IEnumerable<T> source) where T : notnull
        {
            var list = source.ToList();
            var rng = new Random();
            return list.OrderBy(_ => rng.Next());
        }
    }

    // Block just to test the theme's error/warning colors (squigglies).
    // No need to compile — the language server already underlines as you type.
    internal static class ErrorWarningPlayground
    {
        private static void Check()
        {
            int unusedVariable = 42; // warning CS0219: variable is assigned but never used

            WriteLine(nomeQueNaoExiste); // error CS0103: the name does not exist in the current context
        }
    }

    internal class Program
    {
        public static event HowlHandler? OnHowl;

        private static async Task Main(string[] args)
        {
            var dracula = new Dracula("Vlad", 700);
            var castle = new Castle("Bran", Rooms: 57, Residents: new[] { dracula });

            var query = from v in castle.Residents
                        where v.IsAncient()
                        orderby v.Age descending
                        select new { v.Name, v.Age };

            foreach (var item in query)
                WriteLine($"{item.Name} tem {item.Age} anos.");

            (string name, int age) tuple = (dracula.Name, dracula.Age);
            WriteLine($"Tupla: {tuple.name} / {tuple.age}");

            string report = await dracula.HuntAsync();
            WriteLine(report);

            string raw = """
                Texto bruto (raw string literal),
                útil para JSON ou templates.
                """;

            string path = @"C:\Vampires\Transylvania\";

            try
            {
                if (dracula is { Age: > 500, IsAwake: true })
                    dracula.Speak("A noite é jovem.");
            }
            catch (Exception ex) when (ex is InvalidOperationException)
            {
                WriteLine($"Erro: {ex.Message}");
            }
            finally
            {
                OnHowl?.Invoke(null, EventArgs.Empty);
            }

            unsafe
            {
                int number = 42;
                int* pointer = &number;
                WriteLine($"Ponteiro aponta para: {*pointer}");
            }

            static int LocalSquare(int n) => n * n;
            WriteLine(LocalSquare(9));

            WriteLine(raw);
            WriteLine(path);
        }
    }
}