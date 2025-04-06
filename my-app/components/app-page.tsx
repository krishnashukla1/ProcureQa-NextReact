// // // "use client";

// // // import { useState, useEffect } from "react";
// // // import BigTraderLogo from "@/app/BigTraderlogo.png"; // Adjust path if needed
// // // import Link from "next/link";
// // // import Image from "next/image";
// // // import { Button } from "@/components/ui/button";
// // // import { Input } from "@/components/ui/input";
// // // import {
// // //   NavigationMenu,
// // //   NavigationMenuContent,
// // //   NavigationMenuItem,
// // //   NavigationMenuLink,
// // //   NavigationMenuList,
// // //   NavigationMenuTrigger,
// // // } from "@/components/ui/navigation-menu";
// // // import {
// // //   ShoppingCart,
// // //   Menu,
// // //   Search,
// // //   ChevronLeft,
// // //   ChevronRight,
// // // } from "lucide-react";

// // // // Types
// // // interface Product {
// // //   id: string;
// // //   title: string;
// // //   price: number;
// // //   rating: number;
// // //   discount?: number;
// // //   isNew?: boolean;
// // //   slug: string;
// // //   category: string;
// // //   subcategory: string;
// // //   supplier: string;
// // //   description: string;
// // // }

// // // interface Category {
// // //   name: string;
// // //   image: string;
// // // }

// // // interface Supplier {
// // //   name: string;
// // //   email: string;
// // //   image: string;
// // // }

// // // // Mock data
// // // const categories: Category[] = [
// // //   { name: "Category name", image: "/placeholder.svg?height=200&width=200" },
// // //   { name: "Category name", image: "/placeholder.svg?height=200&width=200" },
// // //   { name: "Category name", image: "/placeholder.svg?height=200&width=200" },
// // //   { name: "Category name", image: "/placeholder.svg?height=200&width=200" },
// // //   { name: "Category name", image: "/placeholder.svg?height=200&width=200" },
// // //   { name: "Category name", image: "/placeholder.svg?height=200&width=200" },
// // // ];

// // // const products: Product[] = Array(6).fill({
// // //   id: "PD1233445",
// // //   title: "Product name",
// // //   price: 99.99,
// // //   rating: 4.5,
// // //   category: "Category",
// // //   subcategory: "Subcategory",
// // //   supplier: "Suppliers name",
// // //   description: "Description:",
// // //   slug: "product-name",
// // // });

// // // const suppliers: Supplier[] = [
// // //   {
// // //     name: "Name of supplier",
// // //     email: "supplier@gmail.com",
// // //     image: "/placeholder.svg?height=300&width=400",
// // //   },
// // //   {
// // //     name: "Name of supplier",
// // //     email: "supplier@gmail.com",
// // //     image: "/placeholder.svg?height=300&width=400",
// // //   },
// // //   {
// // //     name: "Name of supplier",
// // //     email: "supplier@gmail.com",
// // //     image: "/placeholder.svg?height=300&width=400",
// // //   },
// // //   {
// // //     name: "Name of supplier",
// // //     email: "supplier@gmail.com",
// // //     image: "/placeholder.svg?height=300&width=400",
// // //   },
// // // ];

// // // const heroSlides = [
// // //   {
// // //     image: "/placeholder.svg?height=600&width=1600",
// // //     title: "Bold Heading text here",
// // //     description: "Shop the latest products",
// // //   },
// // //   {
// // //     image: "/placeholder.svg?height=600&width=1600",
// // //     title: "Special Offers",
// // //     description: "Save big on selected items",
// // //   },
// // //   {
// // //     image: "/placeholder.svg?height=600&width=1600",
// // //     title: "New Arrivals",
// // //     description: "Check out our newest products",
// // //   },
// // // ];

// // // export function BlockPage() {
// // //   const [isMenuOpen, setIsMenuOpen] = useState(false);
// // //   const [currentSlide, setCurrentSlide] = useState(0);
// // //   const [isTransitioning, setIsTransitioning] = useState(false);

// // //   useEffect(() => {
// // //     const timer = setInterval(() => {
// // //       nextSlide();
// // //     }, 5000);

// // //     return () => clearInterval(timer);
// // //   }, [currentSlide]);

// // //   const nextSlide = () => {
// // //     if (!isTransitioning) {
// // //       setIsTransitioning(true);
// // //       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
// // //       setTimeout(() => setIsTransitioning(false), 400);
// // //     }
// // //   };

// // //   const prevSlide = () => {
// // //     if (!isTransitioning) {
// // //       setIsTransitioning(true);
// // //       setCurrentSlide(
// // //         (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
// // //       );
// // //       setTimeout(() => setIsTransitioning(false), 400);
// // //     }
// // //   };

// // //   return (
// // //     <div className="min-h-screen flex flex-col">
// // //       {/* Header */}
// // //       <header
// // //         className="sticky top-0 z-50 bg-white border-b"
// // //         style={{ backgroundColor: "#F6F6F6", width: "100%"}}
// // //       >
// // //         <div
// // //           className="container flex items-center justify-start"
// // //           style={{
// // //             backgroundColor: "#00394D",
// // //             height: "29px",
// // //             fontFamily: "Open Sans",
// // //             fontSize: "12px",
// // //             fontWeight: "400",
// // //             lineHeight: "22px",
// // //             textAlign: "left",
// // //             textUnderlinePosition: "from-font",
// // //             textDecorationSkipInk: "none",
// // //             color: "#BDC6CF",
// // //             paddingLeft: "66px",
// // //             width:"inherit",
// // //           }}
// // //         >
// // //           Grow Your Sales, Maximise Your Reach –{" "}
// // //           <span style={{ color: "#DC4326" }}> Start Selling Now!</span>
// // //         </div>
// // //         <div className="container mx-auto px-4 py-4">
// // //           <div className="flex items-center justify-between gap-4">
// // //             {/* Logo */}
// // //             <Link href="/" className="flex items-center gap-2">
// // //               <Image
// // //                 src={BigTraderLogo}
// // //                 alt="Logo"
// // //                 width={120}
// // //                 height={40}
// // //                 className="h-10 w-auto"
// // //               />
// // //             </Link>

// // //             {/* Search bar - hidden on mobile */}
// // //             <div className="hidden md:flex flex-1 max-w-xl">
// // //               <div className="relative w-full">
// // //                 <Input
// // //                   type="search"
// // //                   placeholder="Search products..."
// // //                   className="w-full pl-10"
// // //                 />
// // //                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
// // //               </div>
// // //             </div>

// // //             {/* Cart and menu */}
// // //             <div className="flex items-center gap-4">
// // //               <Link href="/cart" className="relative">
// // //                 <ShoppingCart className="h-6 w-6" />
// // //                 <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
// // //                   0
// // //                 </span>
// // //               </Link>
// // //               <Button
// // //                 variant="ghost"
// // //                 size="icon"
// // //                 className="md:hidden"
// // //                 onClick={() => setIsMenuOpen(!isMenuOpen)}
// // //               >
// // //                 <Menu className="h-6 w-6" />
// // //               </Button>
// // //             </div>
// // //           </div>

// // //           {/* Navigation - hidden on mobile */}
// // //           <nav className="hidden md:block mt-4 " style={{ backgroundColor: "#FFF", marginBottom: "-17px",width: "100%" }}>
// // //             <NavigationMenu>
// // //               <NavigationMenuList>
// // //                 <NavigationMenuItem>
// // //                   <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
// // //                   <NavigationMenuContent>
// // //                     <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
// // //                       {categories.map((category, index) => (
// // //                         <li key={index}>
// // //                           <NavigationMenuLink asChild>
// // //                             <Link
// // //                               href="#"
// // //                               className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
// // //                             >
// // //                               {category.name}
// // //                             </Link>
// // //                           </NavigationMenuLink>
// // //                         </li>
// // //                       ))}
// // //                     </ul>
// // //                   </NavigationMenuContent>
// // //                 </NavigationMenuItem>
// // //                 <NavigationMenuItem>
// // //                   <Link href="#" legacyBehavior passHref>
// // //                     <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
// // //                       New Arrivals
// // //                     </NavigationMenuLink>
// // //                   </Link>
// // //                 </NavigationMenuItem>
// // //                 <NavigationMenuItem>
// // //                   <Link href="#" legacyBehavior passHref>
// // //                     <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50">
// // //                       Special Offers
// // //                     </NavigationMenuLink>
// // //                   </Link>
// // //                 </NavigationMenuItem>
// // //               </NavigationMenuList>
// // //             </NavigationMenu>
// // //           </nav>
// // //         </div>

// // //         {/* Mobile menu */}
// // //         {isMenuOpen && (
// // //           <div className="md:hidden border-t">
// // //             <div className="container mx-auto px-4 py-4">
// // //               <Input
// // //                 type="search"
// // //                 placeholder="Search products..."
// // //                 className="mb-4"
// // //               />
// // //               <nav className="space-y-4">
// // //                 <Link href="#" className="block py-2 hover:text-primary">
// // //                   Categories
// // //                 </Link>
// // //                 <Link href="#" className="block py-2 hover:text-primary">
// // //                   New Arrivals
// // //                 </Link>
// // //                 <Link href="#" className="block py-2 hover:text-primary">
// // //                   Special Offers
// // //                 </Link>
// // //               </nav>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </header>

// // //       <main className="flex-1">
// // //         {/* Hero Section */}
// // //         <section className="relative h-[600px] overflow-hidden">
// // //           <div
// // //             className="absolute inset-0 flex transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
// // //             style={{
// // //               transform: `translateX(-${currentSlide * 100}%)`,
// // //             }}
// // //           >
// // //             {heroSlides.map((slide, index) => (
// // //               <div key={index} className="relative w-full h-full flex-shrink-0">
// // //                 <Image
// // //                   src={slide.image}
// // //                   alt={slide.title}
// // //                   fill
// // //                   className="object-cover"
// // //                   priority={index === 0}
// // //                 />
// // //                 <div className="absolute inset-0 bg-black/50" />
// // //                 <div className="absolute inset-0 flex items-center justify-center text-white">
// // //                   <div className="text-center">
// // //                     <h1 className="text-4xl md:text-6xl font-bold mb-4">
// // //                       {slide.title}
// // //                     </h1>
// // //                     <p className="text-xl md:text-2xl">{slide.description}</p>
// // //                   </div>
// // //                 </div>
// // //               </div>
// // //             ))}
// // //           </div>

// // //           {/* Navigation arrows */}
// // //           <button
// // //             onClick={prevSlide}
// // //             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
// // //             aria-label="Previous slide"
// // //           >
// // //             <ChevronLeft className="h-6 w-6" />
// // //           </button>
// // //           <button
// // //             onClick={nextSlide}
// // //             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
// // //             aria-label="Next slide"
// // //           >
// // //             <ChevronRight className="h-6 w-6" />
// // //           </button>

// // //           {/* Dot indicators */}
// // //           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
// // //             {heroSlides.map((_, index) => (
// // //               <button
// // //                 key={index}
// // //                 onClick={() => setCurrentSlide(index)}
// // //                 className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
// // //                   currentSlide === index ? "bg-white" : "bg-white/50"
// // //                 }`}
// // //                 aria-label={`Go to slide ${index + 1}`}
// // //               />
// // //             ))}
// // //           </div>
// // //         </section>

// // //         {/* Categories */}
// // //         <section className="py-12">
// // //           <div className="container mx-auto px-4">
// // //             <h2 className="text-2xl font-bold mb-8">Categories</h2>
// // //             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// // //               {categories.map((category, index) => (
// // //                 <Link
// // //                   key={index}
// // //                   href="#"
// // //                   className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:bg-gray-200"
// // //                 >
// // //                   <Image
// // //                     src={category.image}
// // //                     alt={category.name}
// // //                     width={200}
// // //                     height={200}
// // //                     className="object-cover w-full h-full group-hover:scale-105 transition-transform"
// // //                   />
// // //                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30" />
// // //                   <div className="absolute bottom-0 left-0 right-0 p-4">
// // //                     <h3 className="text-white font-medium text-center">
// // //                       {category.name}
// // //                     </h3>
// // //                   </div>
// // //                 </Link>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Products */}
// // //         <section className="py-12 bg-gray-50">
// // //           <div className="container mx-auto px-4">
// // //             <h2 className="text-2xl font-bold mb-8">Products</h2>
// // //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// // //               {products.map((product, index) => (
// // //                 <div key={index} className="bg-white rounded-lg border p-6">
// // //                   <div className="flex justify-between items-start mb-4">
// // //                     <h3 className="font-medium">{product.title}</h3>
// // //                     <span className="text-sm text-muted-foreground">
// // //                       {product.id}
// // //                     </span>
// // //                   </div>
// // //                   <div className="space-y-2 text-sm">
// // //                     <div className="flex justify-between">
// // //                       <span>Category</span>
// // //                       <span>{product.category}</span>
// // //                     </div>
// // //                     <div className="flex justify-between">
// // //                       <span>Subcategory</span>
// // //                       <span>{product.subcategory}</span>
// // //                     </div>
// // //                     <div className="flex justify-between">
// // //                       <span>Supplier</span>
// // //                       <span>{product.supplier}</span>
// // //                     </div>
// // //                     <div className="pt-2">
// // //                       <span className="font-medium">Description:</span>
// // //                       <p className="mt-1 text-muted-foreground">
// // //                         {product.description}
// // //                       </p>
// // //                     </div>
// // //                   </div>
// // //                 </div>
// // //               ))}
// // //             </div>

// // //             {/* Pagination */}
// // //             <div className="flex justify-center mt-8 gap-2">
// // //               <Button variant="outline" size="icon" disabled>
// // //                 ←
// // //               </Button>
// // //               <Button variant="outline">1</Button>
// // //               <Button variant="outline">2</Button>
// // //               <span className="flex items-center px-4">...</span>
// // //               <Button variant="outline">9</Button>
// // //               <Button variant="outline">10</Button>
// // //               <Button variant="outline" size="icon">
// // //                 →
// // //               </Button>
// // //             </div>
// // //           </div>
// // //         </section>

// // //         {/* Suppliers */}
// // //         <section className="py-12">
// // //           <div className="container mx-auto px-4">
// // //             <div className="flex justify-between items-center mb-8">
// // //               <h2 className="text-2xl font-bold">Suppliers</h2>
// // //               <Link href="#" className="text-primary hover:underline">
// // //                 View all
// // //               </Link>
// // //             </div>
// // //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// // //               {suppliers.map((supplier, index) => (
// // //                 <div key={index} className="group">
// // //                   <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-4">
// // //                     <Image
// // //                       src={supplier.image}
// // //                       alt={supplier.name}
// // //                       width={400}
// // //                       height={300}
// // //                       className="w-full h-full object-cover group-hover:scale-105 transition-transform"
// // //                     />
// // //                   </div>
// // //                   <h3 className="font-medium text-lg mb-1">{supplier.name}</h3>
// // //                   <p className="text-sm text-muted-foreground">
// // //                     {supplier.email}
// // //                   </p>
// // //                 </div>
// // //               ))}
// // //             </div>
// // //           </div>
// // //         </section>
// // //       </main>

// // //       {/* Footer */}
// // //       <footer className="bg-[#00394D] text-white">
// // //         <div className="container mx-auto px-4 py-12">
// // //           <div className="grid md:grid-cols-4 gap-8">
// // //             <div>
// // //               <Image
// // //                 src="/placeholder.svg?height=40&width=120"
// // //                 alt="Logo"
// // //                 width={120}
// // //                 height={40}
// // //                 className="h-10 w-auto mb-4"
// // //               />
// // //               <p className="text-sm text-gray-300">
// // //                 Lorem ipsum is a dummy or placeholder text commonly used in
// // //                 graphic design.
// // //               </p>
// // //             </div>
// // //             <div>
// // //               <h3 className="font-bold mb-4">Our Company</h3>
// // //               <ul className="space-y-2">
// // //                 <li>
// // //                   <Link
// // //                     href="#"
// // //                     className="text-sm text-gray-300 hover:text-white"
// // //                   >
// // //                     About us
// // //                   </Link>
// // //                 </li>
// // //                 <li>
// // //                   <Link
// // //                     href="#"
// // //                     className="text-sm text-gray-300 hover:text-white"
// // //                   >
// // //                     Store Locations
// // //                   </Link>
// // //                 </li>
// // //                 <li>
// // //                   <Link
// // //                     href="#"
// // //                     className="text-sm text-gray-300 hover:text-white"
// // //                   >
// // //                     Privacy Policy
// // //                   </Link>
// // //                 </li>
// // //               </ul>
// // //             </div>
// // //             <div>
// // //               <h3 className="font-bold mb-4">Shopping</h3>
// // //               <ul className="space-y-2">
// // //                 <li>
// // //                   <Link
// // //                     href="#"
// // //                     className="text-sm text-gray-300 hover:text-white"
// // //                   >
// // //                     Categories
// // //                   </Link>
// // //                 </li>
// // //                 <li>
// // //                   <Link
// // //                     href="#"
// // //                     className="text-sm text-gray-300 hover:text-white"
// // //                   >
// // //                     New Arrivals
// // //                   </Link>
// // //                 </li>
// // //                 <li>
// // //                   <Link
// // //                     href="#"
// // //                     className="text-sm text-gray-300 hover:text-white"
// // //                   >
// // //                     Best Sellers
// // //                   </Link>
// // //                 </li>
// // //                 <li>
// // //                   <Link
// // //                     href="#"
// // //                     className="text-sm text-gray-300 hover:text-white"
// // //                   >
// // //                     Special Offers
// // //                   </Link>
// // //                 </li>
// // //               </ul>
// // //             </div>
// // //             <div>
// // //               <h3 className="font-bold mb-4">Connect</h3>
// // //               <ul className="space-y-2">
// // //                 <li>
// // //                   <Link
// // //                     href="#"
// // //                     className="text-sm text-gray-300 hover:text-white"
// // //                   >
// // //                     Facebook
// // //                   </Link>
// // //                 </li>
// // //                 <li>
// // //                   <Link
// // //                     href="#"
// // //                     className="text-sm text-gray-300 hover:text-white"
// // //                   >
// // //                     Instagram
// // //                   </Link>
// // //                 </li>
// // //                 <li>
// // //                   <Link
// // //                     href="#"
// // //                     className="text-sm text-gray-300 hover:text-white"
// // //                   >
// // //                     Twitter
// // //                   </Link>
// // //                 </li>
// // //               </ul>
// // //               <form className="mt-4">
// // //                 <Input
// // //                   type="email"
// // //                   placeholder="Subscribe to newsletter"
// // //                   className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
// // //                 />
// // //               </form>
// // //             </div>
// // //           </div>
// // //           <div className="border-t border-gray-700 mt-12 pt-8">
// // //             <p className="text-sm text-gray-300">
// // //               © {new Date().getFullYear()} All rights reserved.
// // //             </p>
// // //           </div>
// // //         </div>
// // //       </footer>
// // //     </div>
// // //   );
// // // }

// // // 2.0

// // // app/components/block-page.tsx
// // "use client";

// // import { useState, useEffect } from "react";
// // import BigTraderLogo from "@/app/BigTraderlogo.png";
// // import Link from "next/link";
// // import Image from "next/image";
// // import { Button } from "@/components/ui/button";
// // import { Input } from "@/components/ui/input";
// // import {
// //   NavigationMenu,
// //   NavigationMenuContent,
// //   NavigationMenuItem,
// //   NavigationMenuLink,
// //   NavigationMenuList,
// //   NavigationMenuTrigger,
// // } from "@/components/ui/navigation-menu";
// // import {
// //   ShoppingCart,
// //   Menu,
// //   Search,
// //   X,
// //   ChevronLeft,
// //   ChevronRight,
// // } from "lucide-react";

// // // Types
// // interface Category {
// //   name: string;
// //   image: string;
// // }

// // interface Product {
// //   id: string;
// //   title: string;
// //   price: number;
// //   rating: number;
// //   discount?: number;
// //   isNew?: boolean;
// //   slug: string;
// //   category: string;
// //   subcategory: string;
// //   supplier: string;
// //   description: string;
// // }

// // interface Supplier {
// //   name: string;
// //   email: string;
// //   image: string;
// // }

// // interface HeroSlide {
// //   image: string;
// //   title: string;
// //   description: string;
// // }

// // // Mock data
// // const categories: Category[] = [
// //   { name: "Category 1", image: "/api/placeholder/200/200" },
// //   { name: "Category 2", image: "/api/placeholder/200/200" },
// //   { name: "Category 3", image: "/api/placeholder/200/200" },
// //   { name: "Category 4", image: "/api/placeholder/200/200" },
// //   { name: "Category 5", image: "/api/placeholder/200/200" },
// //   { name: "Category 6", image: "/api/placeholder/200/200" },
// // ];

// // const products: Product[] = Array(6).fill({
// //   id: "PD1233445",
// //   title: "Product name",
// //   price: 99.99,
// //   rating: 4.5,
// //   category: "Category",
// //   subcategory: "Subcategory",
// //   supplier: "Suppliers name",
// //   description: "Description:",
// //   slug: "product-name",
// // });

// // const suppliers: Supplier[] = [
// //   {
// //     name: "Supplier 1",
// //     email: "supplier1@example.com",
// //     image: "/api/placeholder/400/300",
// //   },
// //   {
// //     name: "Supplier 2",
// //     email: "supplier2@example.com",
// //     image: "/api/placeholder/400/300",
// //   },
// //   {
// //     name: "Supplier 3",
// //     email: "supplier3@example.com",
// //     image: "/api/placeholder/400/300",
// //   },
// //   {
// //     name: "Supplier 4",
// //     email: "supplier4@example.com",
// //     image: "/api/placeholder/400/300",
// //   },
// // ];

// // const heroSlides: HeroSlide[] = [
// //   {
// //     image: "/api/placeholder/1600/600",
// //     title: "Bold Heading text here",
// //     description: "Shop the latest products",
// //   },
// //   {
// //     image: "/api/placeholder/1600/600",
// //     title: "Special Offers",
// //     description: "Save big on selected items",
// //   },
// //   {
// //     image: "/api/placeholder/1600/600",
// //     title: "New Arrivals",
// //     description: "Check out our newest products",
// //   },
// // ];

// // // Header Component
// // function Header() {
// //   const [isMenuOpen, setIsMenuOpen] = useState(false);

// //   return (
// //     <header className="sticky top-0 z-50 w-full bg-white border-b">
// //       {/* Top Banner */}
// //       <div className="w-full bg-[#00394D] px-4 md:px-6">
// //         <div className="container mx-auto">
// //           <p className="text-xs md:text-sm py-1.5 text-[#BDC6CF]">
// //             Grow Your Sales, Maximise Your Reach –{" "}
// //             <span className="text-[#DC4326]">Start Selling Now!</span>
// //           </p>
// //         </div>
// //       </div>

// //       {/* Main Header Content */}
// //       <div className="container mx-auto px-4 py-4">
// //         <div className="flex items-center justify-between gap-4" style={{backgroundColor:"#F6F6F6", width:""}}>
// //           {/* Logo */}
// //           <Link href="/" className="flex-shrink-0">
// //             <Image
// //               src={BigTraderLogo}
// //               alt="Logo"
// //               width={120}
// //               height={40}
// //               className="h-8 md:h-10 w-auto"
// //             />
// //           </Link>

// //           {/* Search Bar */}
// //           <div className="hidden md:flex flex-1 max-w-xl">
// //             <div className="relative w-full">
// //               <Input
// //                 type="search"
// //                 placeholder="Search products..."
// //                 className="w-full pl-10"
// //               />
// //               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
// //             </div>
// //           </div>

// //           {/* Cart and Mobile Menu */}
// //           <div className="flex items-center gap-4">
// //             <Link href="/cart" className="relative">
// //               <ShoppingCart className="h-6 w-6" />
// //               <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
// //                 0
// //               </span>
// //             </Link>
// //             <Button
// //               variant="ghost"
// //               size="icon"
// //               className="md:hidden"
// //               onClick={() => setIsMenuOpen(!isMenuOpen)}
// //             >
// //               {isMenuOpen ? (
// //                 <X className="h-6 w-6" />
// //               ) : (
// //                 <Menu className="h-6 w-6" />
// //               )}
// //             </Button>
// //           </div>
// //         </div>

// //         {/* Desktop Navigation */}
// //         <nav className="hidden md:block mt-4">
// //           <NavigationMenu className="w-full">
// //             <NavigationMenuList className="w-full flex gap-6">
// //               <NavigationMenuItem>
// //                 <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
// //                 <NavigationMenuContent>
// //                   <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
// //                     {categories.map((category, index) => (
// //                       <li key={index}>
// //                         <NavigationMenuLink asChild>
// //                           <Link
// //                             href="#"
// //                             className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
// //                           >
// //                             {category.name}
// //                           </Link>
// //                         </NavigationMenuLink>
// //                       </li>
// //                     ))}
// //                   </ul>
// //                 </NavigationMenuContent>
// //               </NavigationMenuItem>
// //               <NavigationMenuItem className="flex-1">
// //                 <Link href="#" legacyBehavior passHref>
// //                   <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
// //                     New Arrivals
// //                   </NavigationMenuLink>
// //                 </Link>
// //               </NavigationMenuItem>
// //               <NavigationMenuItem>
// //                 <Link href="#" legacyBehavior passHref>
// //                   <NavigationMenuLink className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
// //                     Special Offers
// //                   </NavigationMenuLink>
// //                 </Link>
// //               </NavigationMenuItem>
// //             </NavigationMenuList>
// //           </NavigationMenu>
// //         </nav>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMenuOpen && (
// //         <div className="md:hidden fixed inset-0 bg-white z-50">
// //           <div className="container mx-auto px-4 py-4">
// //             <div className="relative mb-6">
// //               <Input
// //                 type="search"
// //                 placeholder="Search products..."
// //                 className="w-full pl-10"
// //               />
// //               <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
// //             </div>
// //             <nav className="space-y-6">
// //               <div className="space-y-3">
// //                 <h3 className="font-semibold text-sm text-muted-foreground">Categories</h3>
// //                 <ul className="space-y-3">
// //                   {categories.map((category, index) => (
// //                     <li key={index}>
// //                       <Link
// //                         href="#"
// //                         className="block py-2 text-lg font-medium hover:text-primary"
// //                         onClick={() => setIsMenuOpen(false)}
// //                       >
// //                         {category.name}
// //                       </Link>
// //                     </li>
// //                   ))}
// //                 </ul>
// //               </div>
// //               <div className="space-y-3">
// //                 <Link
// //                   href="#"
// //                   className="block py-2 text-lg font-medium hover:text-primary"
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   New Arrivals
// //                 </Link>
// //                 <Link
// //                   href="#"
// //                   className="block py-2 text-lg font-medium hover:text-primary"
// //                   onClick={() => setIsMenuOpen(false)}
// //                 >
// //                   Special Offers
// //                 </Link>
// //               </div>
// //             </nav>
// //           </div>
// //         </div>
// //       )}
// //     </header>
// //   );
// // }

// // // Main Page Component
// // export default function BlockPage() {
// //   const [currentSlide, setCurrentSlide] = useState(0);
// //   const [isTransitioning, setIsTransitioning] = useState(false);

// //   useEffect(() => {
// //     const timer = setInterval(() => {
// //       nextSlide();
// //     }, 5000);

// //     return () => clearInterval(timer);
// //   }, [currentSlide]);

// //   const nextSlide = () => {
// //     if (!isTransitioning) {
// //       setIsTransitioning(true);
// //       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
// //       setTimeout(() => setIsTransitioning(false), 400);
// //     }
// //   };

// //   const prevSlide = () => {
// //     if (!isTransitioning) {
// //       setIsTransitioning(true);
// //       setCurrentSlide(
// //         (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
// //       );
// //       setTimeout(() => setIsTransitioning(false), 400);
// //     }
// //   };

// //   return (
// //     <div className="min-h-screen flex flex-col">
// //       <Header />

// //       <main className="flex-1">
// //         {/* Hero Section */}
// //         <section className="relative h-[600px] overflow-hidden">
// //           <div
// //             className="absolute inset-0 flex transition-transform duration-400"
// //             style={{
// //               transform: `translateX(-${currentSlide * 100}%)`,
// //             }}
// //           >
// //             {heroSlides.map((slide, index) => (
// //               <div key={index} className="relative w-full h-full flex-shrink-0">
// //                 <Image
// //                   src={slide.image}
// //                   alt={slide.title}
// //                   fill
// //                   className="object-cover"
// //                   priority={index === 0}
// //                 />
// //                 <div className="absolute inset-0 bg-black/50" />
// //                 <div className="absolute inset-0 flex items-center justify-center text-white">
// //                   <div className="text-center">
// //                     <h1 className="text-4xl md:text-6xl font-bold mb-4">
// //                       {slide.title}
// //                     </h1>
// //                     <p className="text-xl md:text-2xl">{slide.description}</p>
// //                   </div>
// //                 </div>
// //               </div>
// //             ))}
// //           </div>

// //           {/* Navigation arrows */}
// //           <button
// //             onClick={prevSlide}
// //             className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
// //             aria-label="Previous slide"
// //           >
// //             <ChevronLeft className="h-6 w-6" />
// //           </button>
// //           <button
// //             onClick={nextSlide}
// //             className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full hover:bg-white focus:outline-none focus:ring-2 focus:ring-primary"
// //             aria-label="Next slide"
// //           >
// //             <ChevronRight className="h-6 w-6" />
// //           </button>

// //           {/* Dot indicators */}
// //           <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
// //             {heroSlides.map((_, index) => (
// //               <button
// //                 key={index}
// //                 onClick={() => setCurrentSlide(index)}
// //                 className={`w-3 h-3 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-primary ${
// //                   currentSlide === index ? "bg-white" : "bg-white/50"
// //                 }`}
// //                 aria-label={`Go to slide ${index + 1}`}
// //               />
// //             ))}
// //           </div>
// //         </section>

// //         {/* Categories Section */}
// //         <section className="py-12">
// //           <div className="container mx-auto px-4">
// //             <h2 className="text-2xl font-bold mb-8">Categories</h2>
// //             <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
// //               {categories.map((category, index) => (
// //                 <Link
// //                   key={index}
// //                   href="#"
// //                   className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100 hover:bg-gray-200"
// //                 >
// //                   <Image
// //                     src={category.image}
// //                     alt={category.name}
// //                     width={200}
// //                     height={200}
// //                     className="object-cover w-full h-full group-hover:scale-105 transition-transform"
// //                   />
// //                   <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30" />
// //                   <div className="absolute bottom-0 left-0 right-0 p-4">
// //                     <h3 className="text-white font-medium text-center">
// //                       {category.name}
// //                     </h3>
// //                   </div>
// //                 </Link>
// //               ))}
// //             </div>
// //           </div>
// //         </section>

// //       {/* Products Section */}
// //       <section className="py-12 bg-gray-50">
// //           <div className="container mx-auto px-4">
// //             <h2 className="text-2xl font-bold mb-8">Products</h2>
// //             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
// //               {products.map((product, index) => (
// //                 <div key={index} className="bg-white rounded-lg border p-6">
// //                   <div className="flex justify-between items-start mb-4">
// //                     <h3 className="font-medium">{product.title}</h3>
// //                     <span className="text-sm text-muted-foreground">
// //                       {product.id}
// //                     </span>
// //                   </div>
// //                   <div className="space-y-2 text-sm">
// //                     <div className="flex justify-between">
// //                       <span>Category</span>
// //                       <span>{product.category}</span>
// //                     </div>
// //                     <div className="flex justify-between">
// //                       <span>Subcategory</span>
// //                       <span>{product.subcategory}</span>
// //                     </div>
// //                     <div className="flex justify-between">
// //                       <span>Supplier</span>
// //                       <span>{product.supplier}</span>
// //                     </div>
// //                     <div className="pt-2">
// //                       <span className="font-medium">Description:</span>
// //                       <p className="mt-1 text-muted-foreground">
// //                         {product.description}
// //                       </p>
// //                     </div>
// //                   </div>
// //                 </div>
// //               ))}
// //             </div>

// //             {/* Pagination */}
// //             <div className="flex justify-center mt-8 gap-2">
// //               <Button variant="outline" size="icon" disabled>
// //                 ←
// //               </Button>
// //               <Button variant="outline">1</Button>
// //               <Button variant="outline">2</Button>
// //               <span className="flex items-center px-4">...</span>
// //               <Button variant="outline">9</Button>
// //               <Button variant="outline">10</Button>
// //               <Button variant="outline" size="icon">
// //                 →
// //               </Button>
// //             </div>
// //           </div>
// //         </section>

// //         {/* Suppliers Section */}
// //         <section className="py-12">
// //           <div className="container mx-auto px-4">
// //             <div className="flex justify-between items-center mb-8">
// //               <h2 className="text-2xl font-bold">Suppliers</h2>
// //               <Link href="#" className="text-primary hover:underline">
// //                 View all
// //               </Link>
// //             </div>
// //             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
// //               {suppliers.map((supplier, index) => (
// //                 <div key={index} className="group">
// //                   <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-4">
// //                     <Image
// //                       src={supplier.image}
// //                       alt={supplier.name}
// //                       width={400}
// //                       height={300}
// //                       className="w-full h-full object-cover group-hover:scale-105 transition-transform"
// //                     />
// //                   </div>
// //                   <h3 className="font-medium text-lg mb-1">{supplier.name}</h3>
// //                   <p className="text-sm text-muted-foreground">
// //                     {supplier.email}
// //                   </p>
// //                 </div>
// //               ))}
// //             </div>
// //           </div>
// //         </section>
// //       </main>

// //       {/* Footer */}
// //       <footer className="bg-[#00394D] text-white">
// //         <div className="container mx-auto px-4 py-12">
// //           <div className="grid md:grid-cols-4 gap-8">
// //             <div>
// //               <Image
// //                 src="/api/placeholder/120/40"
// //                 alt="Logo"
// //                 width={120}
// //                 height={40}
// //                 className="h-10 w-auto mb-4"
// //               />
// //               <p className="text-sm text-gray-300">
// //                 Lorem ipsum is a dummy or placeholder text commonly used in
// //                 graphic design.
// //               </p>
// //             </div>
// //             <div>
// //               <h3 className="font-bold mb-4">Our Company</h3>
// //               <ul className="space-y-2">
// //                 <li>
// //                   <Link
// //                     href="#"
// //                     className="text-sm text-gray-300 hover:text-white"
// //                   >
// //                     About us
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="#"
// //                     className="text-sm text-gray-300 hover:text-white"
// //                   >
// //                     Store Locations
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="#"
// //                     className="text-sm text-gray-300 hover:text-white"
// //                   >
// //                     Privacy Policy
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="font-bold mb-4">Shopping</h3>
// //               <ul className="space-y-2">
// //                 <li>
// //                   <Link
// //                     href="#"
// //                     className="text-sm text-gray-300 hover:text-white"
// //                   >
// //                     Categories
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="#"
// //                     className="text-sm text-gray-300 hover:text-white"
// //                   >
// //                     New Arrivals
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="#"
// //                     className="text-sm text-gray-300 hover:text-white"
// //                   >
// //                     Best Sellers
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="#"
// //                     className="text-sm text-gray-300 hover:text-white"
// //                   >
// //                     Special Offers
// //                   </Link>
// //                 </li>
// //               </ul>
// //             </div>
// //             <div>
// //               <h3 className="font-bold mb-4">Connect</h3>
// //               <ul className="space-y-2">
// //                 <li>
// //                   <Link
// //                     href="#"
// //                     className="text-sm text-gray-300 hover:text-white"
// //                   >
// //                     Facebook
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="#"
// //                     className="text-sm text-gray-300 hover:text-white"
// //                   >
// //                     Instagram
// //                   </Link>
// //                 </li>
// //                 <li>
// //                   <Link
// //                     href="#"
// //                     className="text-sm text-gray-300 hover:text-white"
// //                   >
// //                     Twitter
// //                   </Link>
// //                 </li>
// //               </ul>
// //               <form className="mt-4">
// //                 <Input
// //                   type="email"
// //                   placeholder="Subscribe to newsletter"
// //                   className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
// //                 />
// //               </form>
// //             </div>
// //           </div>
// //           <div className="border-t border-gray-700 mt-12 pt-8">
// //             <p className="text-sm text-gray-300">
// //               © {new Date().getFullYear()} All rights reserved.
// //             </p>
// //           </div>
// //         </div>
// //       </footer>
// //     </div>
// //   );
// // }

// // 2.0

// "use client"; // Add this at the top to mark as client component
// import React, { useState } from "react";
// import BigTraderLogo from "@/app/BigTraderlogo.png"; // Adjust path if needed
// import { Search, Camera, Menu, X } from "lucide-react";

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="w-full">
//       {/* Top navy blue banner */}
//       <div className="bg-[#00394D] w-full py-2 px-4 lg:px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Desktop View */}
//           <div className="hidden lg:flex lg:justify-between lg:items-center">
//             <p className="text-xs text-[#BDC6CF] text-left">
//               Grow Your Sales, Maximise Your Reach –
//               <span className="text-[#DC4326] hover:underline cursor-pointer">
//                 {" "}
//                 Start Selling Now!
//               </span>
//             </p>
//             <div className="flex items-center space-x-6">
//               <span className="text-sm text-[#BDC6CF]">Help</span>
//               <div className="flex items-center space-x-4">
//                 <span className="text-sm font-semibold text-[#BDC6CF]">
//                   <span className="text-[#DC4326]">1,223</span> Suppliers
//                 </span>
//                 <span className="text-xs font-semibold text-[#BDC6CF]">
//                   <span className="text-[#DC4326]">1,23,234</span> Products
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* Mobile View - Only Suppliers and Products Count */}
//           <div className="lg:hidden flex justify-center items-center space-x-4">
//             <span className="text-sm font-semibold text-[#BDC6CF]">
//               <span className="text-[#DC4326]">1,223</span> Suppliers
//             </span>
//             <span className="text-xs font-semibold text-[#BDC6CF]">
//               <span className="text-[#DC4326]">1,23,234</span> Products
//             </span>
//           </div>
//         </div>
//       </div>

//       {/* Main header section */}
//       <div className="bg-[#F6F6F6] w-full py-4 px-4 lg:px-6">
//         <div className="max-w-7xl mx-auto">
//           <div className="flex flex-col lg:flex-row items-center gap-4">
//             {/* Logo */}
//             <div className="flex items-center justify-between w-full lg:w-auto">
//               <img
//                 src={BigTraderLogo.src}
//                 alt="BigTrader"
//                 className="h-8 w-auto"
//               />
//               <button
//                 className="lg:hidden"
//                 onClick={() => setIsMenuOpen(!isMenuOpen)}
//               >
//                 {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//               </button>
//             </div>

//             {/* Search bar */}
//             <div className="flex-1 w-full lg:max-w-2xl">
//               <div className="relative flex items-center">
//                 <Search className="absolute left-3 text-[#6A6A6A]" size={18} />
//                 <input
//                   type="text"
//                   placeholder="Search for products, suppliers, and categories"
//                   className="w-full pl-10 pr-20 py-2 border border-[#C4C4C4] rounded-md text-sm focus:outline-none focus:border-[#DC4326]"
//                 />
//                 <div className="absolute right-3 flex items-center space-x-3 text-[#6A6A6A]">
//                   <Camera size={18} className="cursor-pointer" />
//                   <Search size={18} className="cursor-pointer" />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Navigation bar */}
//       <div className="bg-white shadow-md w-full px-4 lg:px-6">
//         <div className="max-w-7xl mx-auto">
//           {/* Mobile Menu */}
//           <nav className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
//             <div className="flex flex-col py-2">
//               <a href="#" className="py-2 text-sm hover:text-[#DC4326]">
//                 Home
//               </a>
//               <a href="#" className="py-2 text-sm hover:text-[#DC4326]">
//                 Suppliers
//               </a>
//               <a href="#" className="py-2 text-sm hover:text-[#DC4326]">
//                 About
//               </a>
//               <a href="#" className="py-2 text-sm hover:text-[#DC4326]">
//                 Contact
//               </a>
//             </div>
//           </nav>

//           {/* Desktop Menu */}
//           <nav className="hidden lg:flex items-center space-x-8 py-3">
//             <a
//               href="#"
//               className="text-sm hover:text-[#DC4326] transition-colors"
//             >
//               Home
//             </a>
//             <a
//               href="#"
//               className="text-sm hover:text-[#DC4326] transition-colors"
//             >
//               Suppliers
//             </a>
//             <a
//               href="#"
//               className="text-sm hover:text-[#DC4326] transition-colors"
//             >
//               About
//             </a>
//             <a
//               href="#"
//               className="text-sm hover:text-[#DC4326] transition-colors"
//             >
//               Contact
//             </a>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Header;

// 3.0

"use client"; // Add this at the top to mark as client component

import React, { useState, useEffect } from "react";
import { Search, Menu, X, ChevronLeft, ChevronRight, Facebook, Instagram, Twitter, InstagramIcon, TwitterIcon, FacebookIcon } from 'lucide-react';
import BigTraderLogo from "@/app/BigTraderlogo.png"; // Adjust path if needed
import BigtraderFooterLogo from "@/app/BigtraderFooterLogo.png";
import Slide1 from "@/app/Slide1.png";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);

  // Update the slides array with actual image links
  const slides = [
    {
      id: 1,
      image: Slide1,
      // title: "Shop Smart, Shop Easy",
      // description: "Discover amazing products from trusted suppliers",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da",
      title: "Quality Assured",
      description: "Every product meets our high standards",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1607082349566-187342175e2f",
      title: "Direct From Suppliers",
      description: "Connect with manufacturers worldwide",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  // Mock data
  const categories: any = [
    { name: "Consumables", image: "/placeholder.svg?height=200&width=200" },
    { name: "Fire and Safety", image: "/placeholder.svg?height=200&width=200" },
    { name: "General", image: "/placeholder.svg?height=200&width=200" },
    { name: "Lubricant", image: "/placeholder.svg?height=200&width=200" },
    { name: "Tapes and Addesives", image: "/placeholder.svg?height=200&width=200" },
    { name: "Measurements", image: "/placeholder.svg?height=200&width=200" },
  ];

  const products: any = Array(6).fill({
    id: "PD1233445",
    title: "Product name",
    price: 99.99,
    rating: 4.5,
    category: "Category",
    subcategory: "Subcategory",
    supplier: "Suppliers name",
    description: "Description:",
    slug: "product-name",
  });

  const suppliers: any = [
    {
      name: "Name of supplier",
      email: "supplier@gmail.com",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Name of supplier",
      email: "supplier@gmail.com",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Name of supplier",
      email: "supplier@gmail.com",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      name: "Name of supplier",
      email: "supplier@gmail.com",
      image: "/placeholder.svg?height=300&width=400",
    },
  ];

  return (
    <div className="w-full">
      {/* Top navy blue banner */}
      <div className="bg-[#00394D] w-full py-2 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Desktop View */}
          <div className="hidden lg:flex lg:justify-between lg:items-center">
            <p className="text-xs text-[#BDC6CF] text-left">
              Grow Your Sales, Maximise Your Reach 
              {/* <span className="text-[#DC4326] hover:underline cursor-pointer">
                {" "}
                Start Selling Now!
              </span> */}
            </p>
            <div className="flex items-center space-x-6">
              {/* <span className="text-sm text-[#BDC6CF]">Help</span> */}
              <div className="flex items-center space-x-4">
                <span className="text-sm font-semibold text-[#DC4326]">
                  1,223 Suppliers
                </span>
                <span className="text-xs font-semibold text-[#DC4326]">
                  1,23,234 Products
                </span>
              </div>
            </div>
          </div>

          {/* Mobile View - Only Suppliers and Products Count */}
          <div className="lg:hidden flex justify-center items-center space-x-4">
            <span className="text-sm font-semibold text-[#BDC6CF]">
              <span className="text-[#DC4326]">1,223</span> Suppliers
            </span>
            <span className="text-xs font-semibold text-[#BDC6CF]">
              <span className="text-[#DC4326]">1,23,234</span> Products
            </span>
          </div>
        </div>
      </div>

      {/* Main header section */}
      <div className="bg-[#F6F6F6] w-full py-4 px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            {/* Logo and Menu */}
            <div className="flex items-center justify-between w-full lg:w-auto">
              <img
                src={BigTraderLogo.src}
                alt="BigTrader"
                className="h-8 w-auto"
              />
              <button
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
            {/* Centered Search bar */}
            <div className="flex-1 w-full lg:max-w-2xl lg:mx-auto">
              <div className="relative flex items-center">
                <Search className="absolute left-3 text-[#6A6A6A]" size={18} />
                <input
                  type="text"
                  placeholder="Search for products, suppliers, and categories"
                  className="w-full pl-10 pr-4 py-2 border border-[#C4C4C4] rounded-md text-sm focus:outline-none focus:border-[#DC4326]"
                />
              </div>
            </div>
            <div className="lg:w-[200px]"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      {/* Navigation bar */}
      <div className="bg-white shadow-md w-full px-4 lg:px-6">
        <div className="max-w-7xl mx-auto">
          {/* Mobile Menu */}
          <nav className={`lg:hidden ${isMenuOpen ? "block" : "hidden"}`}>
            <div className="flex flex-col py-2">
              <a href="#" className="py-2 text-sm hover:text-[#DC4326]">
                Home
              </a>
              <a href="#" className="py-2 text-sm hover:text-[#DC4326]">
                Suppliers
              </a>
              <a href="#" className="py-2 text-sm hover:text-[#DC4326]">
                About
              </a>
              <a href="#" className="py-2 text-sm hover:text-[#DC4326]">
                Contact
              </a>
            </div>
          </nav>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8 py-3">
            <a
              href="#"
              className="text-sm hover:text-[#DC4326] transition-colors"
            >
              Home
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#DC4326] transition-colors"
            >
              Suppliers
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#DC4326] transition-colors"
            >
              About
            </a>
            <a
              href="#"
              className="text-sm hover:text-[#DC4326] transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>

      {/*  // Update the carousel container height */}
      <div className="relative w-full h-[250px] md:h-[350px] lg:h-[310px] overflow-hidden">
        <div
          className="flex transition-transform duration-400 ease-[cubic-bezier(0.4,0,0.2,1)]"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className="min-w-full h-[250px] md:h-[350px] lg:h-[310px] relative"
            >
              <img

                src={typeof slide.image === 'string' ? slide.image : slide.image.src}
                alt={slide.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/50 to-transparent text-white">
                <h2 className="text-lg md:text-2xl lg:text-3xl font-bold mb-2">
                  {slide.title}
                </h2>
                <p className="text-sm md:text-base lg:text-lg max-w-2xl">
                  {slide.description}
                </p>
              </div>
            </div>

          ))}        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentSlide === index ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Rest of your component */}
      {/* Categories */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category: any, index: any) => (
              <Link
                key={index}
                href="#"
                className="block p-4 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300 border border-[#dc4326] hover:shadow-md"
              >
                <h3 className="font-medium text-center">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8">Products</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map(
              (
                product: {
                  title:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                  id:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                  category:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                  subcategory:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                  supplier:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                  description:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                },
                index: React.Key | null | undefined
              ) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-[#dc4326] p-6 hover:shadow-lg transition-shadow duration-200"
                  // style={{boxShadow: "4px 3px 21px 16px rgba(204,204,204,0.89)"
                  // }}
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="font-medium">{product.title}</h3>
                    <span className="text-sm text-muted-foreground">
                      {product.id}
                    </span>
                  </div>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Category</span>
                      <span>{product.category}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Subcategory</span>
                      <span>{product.subcategory}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Supplier</span>
                      <span>{product.supplier}</span>
                    </div>
                    <div className="pt-2">
                      <span className="font-medium">Description:</span>
                      <p className="mt-1 text-muted-foreground">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

          {/* Pagination */}
          <div className="flex justify-end mt-8 gap-2">
            <Button variant="outline" size="icon" disabled>
              ←
            </Button>
            {[1, 2, 3, 4, 5].map((page) => (
              <Button
                key={page}
                onClick={() => setCurrentPage(page)}
                variant="outline"
                className={currentPage === page ? "border-[#dc4326]" : ""}
              >
                {page}
              </Button>
            ))}
            <span className="flex items-center px-4">...</span>
            <Button variant="outline">9</Button>
            <Button variant="outline">10</Button>
            <Button variant="outline" size="icon">
              →
            </Button>
          </div>
        </div>
      </section>

      {/* Suppliers */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Suppliers</h2>
            <Link href="#" className="text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {suppliers.map(
              (
                supplier: {
                  name:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                  email:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | null
                    | undefined;
                },
                index: React.Key | null | undefined
              ) => (
                <div
                  key={index}
                  className="p-6 rounded-lg border border-[#dc4326] bg-white hover:shadow-md transition-shadow duration-300"
                >
                  <h3 className="font-medium text-lg mb-1">{supplier.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    {supplier.email}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-[#00394D] to-[#002535] text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          {/* Main Footer Content */}
          <div className="flex flex-col space-y-8 md:space-y-0 md:grid md:grid-cols-4 md:gap-8">
            {/* Logo & Description Section */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start">
                <Image
                  src={BigtraderFooterLogo.src}
                  alt="Logo"
                  width={140}
                  height={45}
                  className="h-12 w-auto mb-4 hover:opacity-90 transition-opacity"
                />
              </div>
              <p className="text-sm text-gray-300 max-w-xs mx-auto md:mx-0 leading-relaxed">
                Lorem ipsum is a dummy or placeholder text commonly used in
                graphic design.
              </p>

              {/* Social Icons - Mobile Only */}
              <div className="flex justify-center md:hidden space-x-6 mt-6">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                    <FacebookIcon className="h-5 w-5" />
                  </div>
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                    <TwitterIcon className="h-5 w-5" />
                  </div>
                </Link>
              </div>
            </div>

            {/* Quick Links Sections */}
            <div className="grid grid-cols-2 gap-8 md:col-span-2">
              {/* Our Company */}
              <div>
                <h3 className="font-bold mb-4 text-lg text-center md:text-left relative">
                  Our Company
                  <span className="block h-1 w-10 bg-blue-400 mt-2 mx-auto md:mx-0"></span>
                </h3>
                <ul className="space-y-3 text-center md:text-left">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      About us
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Store Locations
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Shopping */}
              <div>
                <h3 className="font-bold mb-4 text-lg text-center md:text-left relative">
                  Shopping
                  <span className="block h-1 w-10 bg-blue-400 mt-2 mx-auto md:mx-0"></span>
                </h3>
                <ul className="space-y-3 text-center md:text-left">
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Categories
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      New Arrivals
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Best Sellers
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#"
                      className="text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-1 inline-block"
                    >
                      Special Offers
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="text-center md:text-left">
              <h3 className="font-bold mb-4 text-lg relative">
                Stay Connected
                <span className="block h-1 w-10 bg-blue-400 mt-2 mx-auto md:mx-0"></span>
              </h3>

              {/* Newsletter Form */}
              <div className="max-w-xs mx-auto md:mx-0">
                <p className="text-sm text-gray-300 mb-4">
                  Subscribe to our newsletter for updates and exclusive offers!
                </p>
                <form className="space-y-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 w-full px-4 py-2 rounded-lg focus:ring-2 focus:ring-blue-400 transition-all"
                  />
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300">
                    Subscribe
                  </button>
                </form>
              </div>

              {/* Social Icons - Desktop Only */}
              <div className="hidden md:flex space-x-4 mt-6">
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                    <FacebookIcon className="h-5 w-5" />
                  </div>
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                    <InstagramIcon className="h-5 w-5" />
                  </div>
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  <div className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-all">
                    <TwitterIcon className="h-5 w-5" />
                  </div>
                </Link>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="border-t border-gray-700/50 mt-8 pt-8">
            <p className="text-sm text-gray-300 text-center">
              © {new Date().getFullYear()} All rights reserved. Created with ❤️
              by BigTrader
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Header;
