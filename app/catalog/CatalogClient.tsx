"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useRef } from "react";
import {
  Instagram,
  Facebook,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  ChevronUp,
  ArrowLeft,
  Search,
  ChevronLeft,
  ChevronRight,
  Download,
  Eye,
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
} from "lucide-react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { SmoothScrollLink } from "@/components/smooth-scroll-link";

const TikTokIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.10z" />
  </svg>
);

type ProductType = "button-pins" | "keychain";
type DesignType =
  | "custom"
  | "classic"
  | "catcore"
  | "pawsome"
  | "kstyle"
  | "film"
  | "hirono"
  | "movie"
  | "kawaii"
  | "midnight";

interface ProductDesign {
  id: number;
  name: string;
  image: string;
  type: DesignType;
  product: ProductType;
}

export default function CatalogClient() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [activeProduct, setActiveProduct] =
    useState<ProductType>("button-pins");
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("name");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [priceDropdownOpen, setPriceDropdownOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ProductDesign | null>(
    null
  );
  const [zoomLevel, setZoomLevel] = useState(1);
  const itemsPerPage = 8;
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const productParam = searchParams.get("product");
    if (productParam && productParam !== activeProduct) {
      setActiveProduct(productParam as ProductType);
    }
  }, [searchParams]);

  // When user clicks a tab, update both state and URL
  const handleTabSwitch = (product: ProductType) => {
    setActiveProduct(product);
    const params = new URLSearchParams(Array.from(searchParams.entries()));
    params.set("product", product);
    router.replace(`?${params.toString()}`);
  };

  const fromSection = searchParams.get("from") || "products";

  const handleBackToHome = (e: React.MouseEvent) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      router.push(`/#${fromSection}`);
    } else {
      // If already on main page, use smooth scroll
      const target = document.getElementById(fromSection);
      if (target) {
        const headerOffset = 120;
        const rect = target.getBoundingClientRect();
        const elementPosition = rect.top + window.scrollY;
        const offsetPosition = elementPosition - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };
  const buttonPinDesigns: ProductDesign[] = [
    {
      id: 1,
      name: "Custom Design",
      image: "/catalogue/buttonpins/custom-D1.png",
      type: "custom",
      product: "button-pins",
    },
  ];

  // Sample product designs data
  const keychainDesigns: ProductDesign[] = [
    {
      id: 1,
      name: "Design 1",
      image: "/catalogue/photostrips/kstyle-D1.png",
      type: "kstyle",
      product: "keychain",
    },
    {
      id: 2,
      name: "Design 2",
      image: "/catalogue/photostrips/kstyle-D2.png",
      type: "kstyle",
      product: "keychain",
    },
    {
      id: 3,
      name: "Design 3",
      image: "/catalogue/photostrips/kstyle-D3.png",
      type: "kstyle",
      product: "keychain",
    },
    {
      id: 4,
      name: "Design 4",
      image: "/catalogue/photostrips/kstyle-D4.png",
      type: "kstyle",
      product: "keychain",
    },
    {
      id: 5,
      name: "Design 5",
      image: "/catalogue/photostrips/kstyle-D5.png",
      type: "kstyle",
      product: "keychain",
    },
    {
      id: 6,
      name: "Design D1A",
      image: "/catalogue/photostrips/film-D1A.png",
      type: "film",
      product: "keychain",
    },
    {
      id: 7,
      name: "Design D2A",
      image: "/catalogue/photostrips/film-D2A.png",
      type: "film",
      product: "keychain",
    },
    {
      id: 8,
      name: "Design D3A",
      image: "/catalogue/photostrips/film-D3A.png",
      type: "film",
      product: "keychain",
    },
    {
      id: 9,
      name: "Design D4A",
      image: "/catalogue/photostrips/hirono-D4A.png",
      type: "hirono",
      product: "keychain",
    },
    {
      id: 10,
      name: "Design D5A",
      image: "/catalogue/photostrips/hirono-D5A.png",
      type: "hirono",
      product: "keychain",
    },
    {
      id: 11,
      name: "Design D6A",
      image: "/catalogue/photostrips/hirono-D6A.png",
      type: "hirono",
      product: "keychain",
    },
    {
      id: 12,
      name: "Design D1B",
      image: "/catalogue/photostrips/kawaii-1B.png",
      type: "kawaii",
      product: "keychain",
    },
    {
      id: 13,
      name: "Design D2B",
      image: "/catalogue/photostrips/kawaii-2B.png",
      type: "kawaii",
      product: "keychain",
    },
    {
      id: 14,
      name: "Design D3B",
      image: "/catalogue/photostrips/movie-3B.png",
      type: "movie",
      product: "keychain",
    },
    {
      id: 15,
      name: "Design D4B",
      image: "/catalogue/photostrips/movie-4B.png",
      type: "movie",
      product: "keychain",
    },
    {
      id: 16,
      name: "Design D3B",
      image: "/catalogue/photostrips/kawaii-3B.png",
      type: "kawaii",
      product: "keychain",
    },
    {
      id: 17,
      name: "Design D1C",
      image: "/catalogue/photostrips/kawaii-1C.png",
      type: "kawaii",
      product: "keychain",
    },
    {
      id: 18,
      name: "Design D2C",
      image: "/catalogue/photostrips/kstyle-2C.png",
      type: "kstyle",
      product: "keychain",
    },
    {
      id: 19,
      name: "Design D3C",
      image: "/catalogue/photostrips/kstyle-3C.png",
      type: "kstyle",
      product: "keychain",
    },
    {
      id: 20,
      name: "Design D4C",
      image: "/catalogue/photostrips/kstyle-4C.png",
      type: "kstyle",
      product: "keychain",
    },
    {
      id: 21,
      name: "Design D5C",
      image: "/catalogue/photostrips/kstyle-5C.png",
      type: "kstyle",
      product: "keychain",
    },
    {
      id: 22,
      name: "Design D1D",
      image: "/catalogue/photostrips/kstyle-1D.png",
      type: "kstyle",
      product: "keychain",
    },
    {
      id: 23,
      name: "Design D2D",
      image: "/catalogue/photostrips/kstyle-2D.png",
      type: "kstyle",
      product: "keychain",
    },
    {
      id: 24,
      name: "Design D3D",
      image: "/catalogue/photostrips/midnight-3D.png",
      type: "midnight",
      product: "keychain",
    },
    {
      id: 25,
      name: "Design D4D",
      image: "/catalogue/photostrips/midnight-4D.png",
      type: "midnight",
      product: "keychain",
    },
    {
      id: 26,
      name: "Design D5D",
      image: "/catalogue/photostrips/midnight-5D.png",
      type: "midnight",
      product: "keychain",
    },
    {
      id: 27,
      name: "Design D1E",
      image: "/catalogue/photostrips/movie-1E.png",
      type: "movie",
      product: "keychain",
    },
    {
      id: 28,
      name: "Design D2E",
      image: "/catalogue/photostrips/catcore-2E.png",
      type: "catcore",
      product: "keychain",
    },
    {
      id: 29,
      name: "Design D3E",
      image: "/catalogue/photostrips/catcore-3E.png",
      type: "catcore",
      product: "keychain",
    },
    {
      id: 30,
      name: "Design D4E",
      image: "/catalogue/photostrips/catcore-4E.png",
      type: "catcore",
      product: "keychain",
    },
    {
      id: 31,
      name: "Design D5E",
      image: "/catalogue/photostrips/catcore-5E.png",
      type: "catcore",
      product: "keychain",
    },
    {
      id: 32,
      name: "Design D1F",
      image: "/catalogue/photostrips/catcore-1F.png",
      type: "catcore",
      product: "keychain",
    },
    {
      id: 33,
      name: "Design D2F",
      image: "/catalogue/photostrips/catcore-2F.png",
      type: "catcore",
      product: "keychain",
    },
    {
      id: 34,
      name: "Design D3F",
      image: "/catalogue/photostrips/catcore-3F.png",
      type: "catcore",
      product: "keychain",
    },
    {
      id: 35,
      name: "Design D4F",
      image: "/catalogue/photostrips/catcore-4F.png",
      type: "catcore",
      product: "keychain",
    },
    {
      id: 36,
      name: "Design D5F",
      image: "/catalogue/photostrips/catcore-5F.png",
      type: "catcore",
      product: "keychain",
    },
    {
      id: 37,
      name: "Design D1G",
      image: "/catalogue/photostrips/pawsome-1G.png",
      type: "pawsome",
      product: "keychain",
    },
    {
      id: 38,
      name: "Design D2F",
      image: "/catalogue/photostrips/pawsome-2G.png",
      type: "pawsome",
      product: "keychain",
    },
    {
      id: 39,
      name: "Design D3F",
      image: "/catalogue/photostrips/pawsome-3G.png",
      type: "pawsome",
      product: "keychain",
    },
  ];

  const allDesigns: ProductDesign[] =
    activeProduct === "button-pins" ? buttonPinDesigns : keychainDesigns;

  // Filter and sort designs
  const filteredAndSortedDesigns = useMemo(() => {
    const filtered = allDesigns.filter((design) => {
      const matchesProduct = design.product === activeProduct;
      const matchesSearch = design.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      const matchesCategory =
        categoryFilter === "all" || design.type === categoryFilter;
      return matchesProduct && matchesSearch && matchesCategory;
    });

    // Sort designs
    return filtered.sort((a, b) => {
      switch (sortBy) {
        case "name":
          return a.name.localeCompare(b.name);
        case "type":
          return a.type.localeCompare(b.type);
        default:
          return 0;
      }
    });
  }, [searchTerm, sortBy, categoryFilter, activeProduct]);

  // Pagination
  const totalPages = Math.ceil(filteredAndSortedDesigns.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedDesigns = filteredAndSortedDesigns.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Reset to first page when search/sort/category changes
  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  const handleSortChange = (value: string) => {
    setSortBy(value);
    setCurrentPage(1);
  };

  const handleCategoryChange = (value: string) => {
    setCategoryFilter(value);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    // Scroll to grid on mobile view
    if (typeof window !== "undefined" && gridRef.current) {
      // Offset for sticky header (adjust as needed)
      const headerOffset = window.innerWidth < 768 ? 80 : 120;
      const gridTop =
        gridRef.current.getBoundingClientRect().top +
        window.scrollY -
        headerOffset;
      window.scrollTo({ top: gridTop, behavior: "smooth" });
    }
  };

  // Get product pricing
  const getProductPricing = () => {
    if (activeProduct === "button-pins") {
      return [
        { label: "Single", price: "₱20.00" },
        { label: "Bulk (10 pcs)", price: "₱198.00" },
        { label: "Bulk (20 pcs)", price: "₱395.00" },
      ];
    } else {
      return [
        { label: "Single", price: "₱39.00" },
        { label: "Couple", price: "₱75.00" },
        { label: "Bulk Orders", price: "Contact us" },
      ];
    }
  };

  const getProductName = () => {
    return activeProduct === "button-pins" ? "Button Pins" : "Keychain";
  };

  // Get product-specific categories
  const getProductCategories = () => {
    if (activeProduct === "button-pins") {
      return [
        { value: "all", label: "All Categories" },
        { value: "custom", label: "Custom" },
        { value: "classic", label: "Classic" },
      ];
    } else {
      return [
        { value: "all", label: "All Categories" },
        { value: "catcore", label: "Catcore" },
        { value: "pawsome", label: "Pawsome" },
        { value: "kstyle", label: "K-Style" },
        { value: "film", label: "Film Camera" },
        { value: "hirono", label: "Hirono" },
        { value: "movie", label: "Movie" },
        { value: "kawaii", label: "Kawaii" },
      ];
    }
  };

  // Handle image download
  const handleDownload = (design: ProductDesign) => {
    // Create a download link
    const link = document.createElement("a");
    link.href = design.image;
    link.download = `${design.name.replace(/\s+/g, "-").toLowerCase()}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle image view
  const handleImageView = (design: ProductDesign) => {
    setSelectedImage(design);
    setZoomLevel(1); // Reset zoom when opening new image
  };

  // Handle zoom
  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(prev - 0.25, 0.5));
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="px-8 md:px-12 lg:px-16 xl:px-20 py-4">
          <div className="container flex items-center justify-center md:justify-between h-10 px-2 mx-auto">
            <a
              href={`/#${fromSection}`}
              onClick={handleBackToHome}
              className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Products</span>
            </a>
            <div className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Tiny Treasures Logo"
                width={80}
                height={80}
                className="rounded-lg"
              />
              {/*<span className="text-xl font-bold text-gray-800">Tiny Treasures</span>*/}
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="px-4 md:px-12 lg:px-16 xl:px-20">
        <div className="container mx-auto py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <Card className="p-6 bg-white/80 backdrop-blur-md shadow-lg">
                <h2 className="text-xl font-bold text-gray-800 mb-6">
                  Product Catalog
                </h2>

                {/* Product Switcher */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => handleTabSwitch("button-pins")}
                    className={`w-full px-4 py-3 rounded-lg font-medium transition-all ${
                      activeProduct === "button-pins"
                        ? "bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Button Pins
                  </button>
                  <button
                    onClick={() => handleTabSwitch("keychain")}
                    className={`w-full px-4 py-3 rounded-lg font-medium transition-all ${
                      activeProduct === "keychain"
                        ? "bg-gradient-to-r from-sky-400 to-blue-500 text-white shadow-md"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Keychain
                  </button>
                </div>

                {/* Current Product Pricing */}
                <div className="mb-6">
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <div className="text-center">
                      <h3 className="font-semibold text-gray-800 mb-3">
                        {getProductName()} Pricing
                      </h3>
                      <div className="space-y-2">
                        {getProductPricing().map((pricing, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-center text-sm"
                          >
                            <span className="text-gray-700">
                              {pricing.label}:
                            </span>
                            <span className="font-semibold text-blue-600">
                              {pricing.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="mb-6">
                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    Browse through our designs, view them in full size, and
                    download your preferred designs and send it in our
                    messenger/facebook account for your order.
                  </p>
                </div>
              </Card>
            </div>

            {/* Product Grid */}
            <div className="lg:w-3/4" ref={gridRef}>
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-gray-800 mb-2">
                  {getProductName()} Designs
                </h1>
                <p className="text-gray-600 mb-6">
                  Choose from our beautiful collection of designs for your{" "}
                  {getProductName().toLowerCase()}
                </p>

                {/* Search and Sort Bar */}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="w-full sm:w-64 relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <Input
                        placeholder="Search designs..."
                        value={searchTerm}
                        onChange={(e) => handleSearchChange(e.target.value)}
                        className="pl-10 bg-white/70 backdrop-blur-sm border-gray-200 focus:border-blue-400 focus:ring-blue-400"
                      />
                    </div>
                    <div className="flex gap-4">
                      <div className="w-full sm:w-48">
                        <select
                          value={categoryFilter}
                          onChange={(e) => handleCategoryChange(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white/70 backdrop-blur-sm text-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:ring-1 transition-colors"
                        >
                          {getProductCategories().map((category) => (
                            <option key={category.value} value={category.value}>
                              {category.label}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="w-full sm:w-48">
                        <select
                          value={sortBy}
                          onChange={(e) => handleSortChange(e.target.value)}
                          className="w-full px-3 py-2 rounded-lg border border-gray-200 bg-white/70 backdrop-blur-sm text-gray-700 focus:border-blue-400 focus:ring-blue-400 focus:ring-1 transition-colors"
                        >
                          <option value="name">Sort by Name</option>
                          <option value="type">Sort by Type</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Results Info */}
                  <div className="text-sm text-gray-600">
                    Showing {displayedDesigns.length} of{" "}
                    {filteredAndSortedDesigns.length} designs
                  </div>
                </div>
              </div>

              {/* Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayedDesigns.map((design) => (
                  <Card
                    key={design.id}
                    className="group overflow-hidden bg-white/80 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  >
                    <div
                      className="aspect-[5/4] overflow-hidden relative cursor-pointer"
                      onClick={() => handleImageView(design)}
                    >
                      <Image
                        src={design.image}
                        alt={design.name}
                        width={250}
                        height={200}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {/* Subtle hover indicator */}
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <Eye className="w-8 h-8 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-gray-800 text-center">
                        {design.name}
                      </h3>
                      <p className="text-xs text-gray-500 text-center mt-1 capitalize">
                        {design.type}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>

              {/* No Results */}
              {displayedDesigns.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">
                    No designs found matching your search.
                  </p>
                </div>
              )}

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="mt-8 flex justify-center items-center space-x-4">
                  <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    variant="outline"
                    className="px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  >
                    <ChevronLeft className="w-4 h-4 mr-2" />
                    Previous
                  </Button>

                  <div className="flex space-x-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                      (page) => (
                        <Button
                          key={page}
                          onClick={() => handlePageChange(page)}
                          variant={currentPage === page ? "default" : "outline"}
                          className={`px-3 py-2 ${
                            currentPage === page
                              ? "bg-blue-500 text-white"
                              : "border-gray-300 text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          {page}
                        </Button>
                      )
                    )}
                  </div>

                  <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    variant="outline"
                    className="px-4 py-2 border-gray-300 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                    <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Image Viewer Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 md:p-6"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setSelectedImage(null);
              setZoomLevel(1);
            }
          }}
        >
          <div className="max-w-5xl max-h-[85vh] w-full md:w-auto bg-white rounded-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-3 md:p-4 border-b">
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-lg font-semibold text-gray-800 truncate">
                  {selectedImage.name}
                </h3>
                <p className="text-xs md:text-sm text-gray-500 capitalize">
                  {selectedImage.type} Design
                </p>
              </div>
              <div className="flex items-center gap-2 ml-2">
                {/* Zoom Controls - Hidden on mobile */}
                <div className="hidden sm:flex items-center gap-1 border rounded-lg p-1">
                  <Button
                    onClick={handleZoomOut}
                    disabled={zoomLevel <= 0.5}
                    variant="ghost"
                    size="sm"
                    className="px-2 py-1 h-8"
                  >
                    <ZoomOut className="w-4 h-4" />
                  </Button>
                  <span className="text-sm font-medium px-2 min-w-[3rem] text-center">
                    {Math.round(zoomLevel * 100)}%
                  </span>
                  <Button
                    onClick={handleZoomIn}
                    disabled={zoomLevel >= 3}
                    variant="ghost"
                    size="sm"
                    className="px-2 py-1 h-8"
                  >
                    <ZoomIn className="w-4 h-4" />
                  </Button>
                  <Button
                    onClick={handleZoomReset}
                    variant="ghost"
                    size="sm"
                    className="px-2 py-1 h-8"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </Button>
                </div>

                <Button
                  onClick={() => handleDownload(selectedImage)}
                  className="bg-blue-500 text-white hover:bg-blue-600 px-3 md:px-4 py-2 rounded-lg transition-colors text-sm"
                >
                  <Download className="w-4 h-4 mr-1 md:mr-2" />
                  Download
                </Button>
                <Button
                  onClick={() => {
                    setSelectedImage(null);
                    setZoomLevel(1);
                  }}
                  variant="outline"
                  className="px-2 md:px-3 py-2 rounded-lg"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Mobile Zoom Controls */}
            <div className="sm:hidden border-b p-2">
              <div className="flex items-center justify-center gap-3">
                <Button
                  onClick={handleZoomOut}
                  disabled={zoomLevel <= 0.5}
                  variant="ghost"
                  size="sm"
                  className="px-2 py-1"
                >
                  <ZoomOut className="w-4 h-4" />
                </Button>
                <span className="text-sm font-medium px-3 min-w-[3rem] text-center">
                  {Math.round(zoomLevel * 100)}%
                </span>
                <Button
                  onClick={handleZoomIn}
                  disabled={zoomLevel >= 3}
                  variant="ghost"
                  size="sm"
                  className="px-2 py-1"
                >
                  <ZoomIn className="w-4 h-4" />
                </Button>
                <Button
                  onClick={handleZoomReset}
                  variant="ghost"
                  size="sm"
                  className="px-2 py-1"
                >
                  <RotateCcw className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Image Container */}
            <div className="p-3 md:p-4 max-h-[calc(85vh-120px)] sm:max-h-[calc(85vh-100px)] overflow-auto">
              <div className="flex justify-center">
                <div
                  className="transition-transform duration-200 ease-out"
                  style={{ transform: `scale(${zoomLevel})` }}
                >
                  <Image
                    src={selectedImage.image}
                    alt={selectedImage.name}
                    width={400}
                    height={320}
                    className="max-w-none h-auto rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gradient-to-r from-pink-400 to-pink-500 text-white py-12 relative z-20">
        <div className="container mx-auto px-4 md:px-12 lg:px-16 xl:px-20">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Left side - Company Info */}
            <div className="text-center md:text-left">
              <Image
                src="/footer-logo.png"
                alt="Tiny Treasures"
                width={230}
                height={70}
                className="h-30 w-auto mx-auto sm:mx-0"
                priority
              />
              {/* <h3 className="text-2xl font-black text-white">Tiny Treasures</h3> */}
              <p className="mt-4 font-regular text-white/80">
                Thoughtfully crafted keepsakes to capture and <br />
                cherish your most meaningful memories.
              </p>
              <div className="flex items-center justify-center md:justify-start mt-4 space-x-3">
                <span className="text-white font-medium">Follow us:</span>
                <a
                  href="#"
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                >
                  <Instagram className="w-5 h-5 text-white" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=100089262530024"
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                >
                  <Facebook className="w-5 h-5 text-white" />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="https://www.tiktok.com/@tinytreasuresab"
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
                >
                  <TikTokIcon />
                  <span className="sr-only">TikTok</span>
                </a>
              </div>
            </div>

            {/* Right side - Three columns grouped together */}
            <div className="grid gap-4 md:grid-cols-3">
              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white">
                  Quick Links
                </h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <SmoothScrollLink
                      href="#home"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Home
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink
                      href="#products"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Products
                    </SmoothScrollLink>
                  </li>

                  <li>
                    <SmoothScrollLink
                      href="#about"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      About
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink
                      href="#contact"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Contact
                    </SmoothScrollLink>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white">Product</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <SmoothScrollLink
                      href="#products"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Wikie Button Pins
                    </SmoothScrollLink>
                  </li>
                  <li>
                    <SmoothScrollLink
                      href="#products"
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      Photostrip Keychain
                    </SmoothScrollLink>
                  </li>
                </ul>
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-lg font-semibold text-white">Contact</h3>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center justify-center md:justify-start space-x-2">
                    <div className="bg-pink-300/60 rounded-full p-2 flex items-center justify-center">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/80">
                      tinytreasuresab@gmail.com
                    </span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start space-x-2">
                    <div className="bg-pink-300/60 rounded-full p-2 flex items-center justify-center">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/80">(+63) 939-620-4233</span>
                  </li>
                  <li className="flex items-center justify-center md:justify-start space-x-2">
                    <div className="bg-pink-300/60 rounded-full p-2 flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-white/80">
                      Daet, Camarines Norte, Philippines, 4600
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center text-white/80">
            <p>© 2025 Tiny Treasures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
